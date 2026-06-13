const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
const initialData = eval(`(function() { const module = {}; ${content.replace('const initialData =', 'module.exports =')}; return module.exports; })()`);

for (const subject of initialData) {
  for (const section of subject.sections) {
    for (const topic of section.topics) {
      if (topic.content) {
        const lines = topic.content.split('\n').map(l => l.trim()).filter(l => l.length > 30);
        let summary = 'No summary available.';
        for (const line of lines) {
          const l = line.toLowerCase();
          if (
            l.includes('tab 1') || 
            l.includes('____') || 
            l.startsWith('title:') || 
            l.includes('image of school supplies') || 
            l.includes('listen to this tab') ||
            l.startsWith('owner') ||
            l.startsWith('instructor') ||
            l.startsWith('subject')
          ) {
            continue;
          }
          summary = line;
          break;
        }
        if (summary.length > 180) {
          summary = summary.substring(0, 177) + '...';
        }
        topic.summary = summary;
      }
    }
  }
}

fs.writeFileSync('data.js', `// FULL DATA EXTRACTION\nconst initialData = ${JSON.stringify(initialData, null, 2)};`);
console.log('Fixed summaries!');
