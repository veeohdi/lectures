const fs = require('fs');

async function run() {
  const content = fs.readFileSync('data.js', 'utf8');
  const code = content.replace('const initialData =', 'module.exports =');
  const initialData = eval(`(function() { const module = {}; ${code}; return module.exports; })()`);

  console.log('Fetching Google Docs content...');
  for (const subject of initialData) {
    for (const section of subject.sections) {
      for (const topic of section.topics) {
        if (topic.gdoc && topic.gdoc.includes('docs.google.com/document/d/')) {
          const match = topic.gdoc.match(/\/d\/([a-zA-Z0-9-_]+)/);
          if (!match) continue;
          const docId = match[1];
          const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;
          
          try {
            console.log(`Fetching: ${topic.title}...`);
            const res = await fetch(exportUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const text = await res.text();
            
            // Clean text
            const cleaned = text.replace(/\r\n/g, '\n').trim();
            topic.content = cleaned;
            
            // Extract a summary
            const lines = cleaned.split('\n').map(l => l.trim()).filter(l => l.length > 20);
            let summary = 'No summary available.';
            for (const line of lines) {
              if (line.length > 50 && !line.toLowerCase().includes('tab 1') && !line.includes('____') && !line.toLowerCase().startsWith('title:')) {
                summary = line;
                break;
              }
            }
            if (summary.length > 180) {
              summary = summary.substring(0, 177) + '...';
            }
            topic.summary = summary;
          } catch (e) {
            console.error(`Failed to fetch ${topic.title}: ${e.message}`);
          }
        }
      }
    }
  }

  const newDataJs = `// FULL DATA EXTRACTION\nconst initialData = ${JSON.stringify(initialData, null, 2)};`;
  fs.writeFileSync('data.js', newDataJs);
  console.log('Successfully enriched data.js with full content and hover summaries!');
}

run();
