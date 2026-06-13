        const { useState, useMemo, useEffect, useRef, useCallback } = React;
        const { motion, AnimatePresence } = window.Motion;

        /* ─── SVG ICONS ─── */
        const Icon = ({ children, size = 24, className = "", style }) => (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>{children}</svg>
        );

        const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></Icon>;
        const IconFileText = (p) => <Icon {...p}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></Icon>;
        const IconBookOpen = (p) => <Icon {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Icon>;
        const IconPlus = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
        const IconExternalLink = (p) => <Icon {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></Icon>;
        const IconX = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;
        const IconCopy = (p) => <Icon {...p}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></Icon>;
        const IconCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
        const IconHistory = (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></Icon>;

        // Sun icon for light mode
        const IconSun = (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></Icon>;

        // Moon icon for dark mode
        const IconMoon = (p) => <Icon {...p}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></Icon>;

        // Subject icons
        const IconMicroscope = (p) => <Icon {...p}><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></Icon>;
        const IconBeaker = (p) => <Icon {...p}><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></Icon>;
        const IconDroplet = (p) => <Icon {...p}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></Icon>;
        const IconShieldAlert = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Icon>;
        const IconPill = (p) => <Icon {...p}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></Icon>;

        /* ─── SUBJECT METADATA ─── */
        const SUBJECT_META = {
          "Anatomical Pathology": { key: "pathology", icon: IconMicroscope },
          "Chemical Pathology":   { key: "chemistry", icon: IconBeaker },
          "Haematology":          { key: "haematology", icon: IconDroplet },
          "Medical Microbiology": { key: "microbiology", icon: IconShieldAlert },
          "Pharmacology":         { key: "pharmacology", icon: IconPill },
        };

        const getSubjectMeta = (name) =>
          SUBJECT_META[name] || { key: "pathology", icon: IconBookOpen };

        const isFuzzyMatch = (pattern, str) => {
          if (!pattern) return true;
          const re = new RegExp(pattern.split('').map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*'), 'i');
          return re.test(str);
        };

        /* ─── LITE MODE HOOK ─── */
        function useLiteMode() {
          const [isLite, setIsLite] = useState(() => {
            const saved = localStorage.getItem('medvault-lite');
            if (saved !== null) return saved === 'true';
            
            // Auto-detect struggling hardware
            let isStruggling = false;
            if (navigator.deviceMemory && navigator.deviceMemory <= 4) isStruggling = true;
            if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) isStruggling = true;
            if (navigator.connection && navigator.connection.saveData) isStruggling = true;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) isStruggling = true;
            
            return isStruggling;
          });

          useEffect(() => {
            localStorage.setItem('medvault-lite', isLite);
            if (isLite) {
              document.body.classList.add('lite-mode');
            } else {
              document.body.classList.remove('lite-mode');
            }
          }, [isLite]);

          const toggleLite = useCallback(() => setIsLite(p => !p), []);
          return { isLite, toggleLite };
        }

        /* ─── THEME HOOK ─── */
        function useTheme() {
          const [theme, setTheme] = useState(() => {
            return document.documentElement.getAttribute('data-theme') || 'dark';
          });

          const toggle = useCallback(() => {
            const next = theme === 'light' ? 'dark' : 'light';
            setTheme(next);
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('medvault-theme', next);
            document.querySelector('meta[name="theme-color"]')
              ?.setAttribute('content', next === 'dark' ? '#08080f' : '#f0f2f7');
          }, [theme]);

          return { theme, toggle };
        }

        /* ─── EASTER EGG HOOK ─── */
        function useEasterEggs() {
          const [easterEggFound, setEasterEggFound] = useState(false);
          const [clickCount, setClickCount] = useState(0);

          useEffect(() => {
            const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
            let idx = 0;
            const handler = (e) => {
              if (e.key === konami[idx]) {
                idx++;
                if (idx === konami.length) {
                  setEasterEggFound(true);
                  idx = 0;
                }
              } else {
                idx = 0;
              }
            };
            window.addEventListener('keydown', handler);
            return () => window.removeEventListener('keydown', handler);
          }, []);

          const handleLogoClick = useCallback(() => {
            setClickCount(c => {
              const nc = c + 1;
              if (nc >= 5) {
                setEasterEggFound(true);
                return 0;
              }
              return nc;
            });
            setTimeout(() => setClickCount(0), 2000);
          }, []);

          useEffect(() => {
            if (easterEggFound) {
              document.body.classList.add('easter-egg');
              // Play a fun little haptic if on mobile
              if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
            }
          }, [easterEggFound]);

          return { easterEggFound, setEasterEggFound, handleLogoClick };
        }

        /* ─── EASTER EGG MODAL ─── */
        function EasterEggModal({ onClose }) {
          const [name, setName] = useState('');
          const [status, setStatus] = useState('');
          
          const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus('Sending...');
            try {
              const response = await fetch("https://formspree.io/f/xqeogvan", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ Name: name || 'Anonymous', message: "I found the MedVault Easter Egg!" })
              });
              if (response.ok) {
                setStatus('Sent! 🎉');
                setTimeout(() => onClose(), 1500);
              } else {
                setStatus('Error sending.');
              }
            } catch (err) {
              setStatus('Error sending.');
            }
          };

          return (
            <div className="modal-overlay" onClick={onClose}>
              <motion.div initial={{ scale: 0.94, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 12 }} className="modal-panel" onClick={e => e.stopPropagation()}>
                <div className="glass-bg" aria-hidden="true"></div>
                <div className="modal-header">
                  <h2 className="modal-title">🎉 You found a secret!</h2>
                  <button className="modal-close" onClick={onClose}><IconX size={15} /></button>
                </div>
                <div className="modal-body" style={{ textAlign: 'center' }}>
                  <p style={{ marginBottom: '16px', lineHeight: 1.5 }}>You've uncovered one of the hidden Easter Eggs! If you'd like to let the creator know you found it, enter your name below.</p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input 
                      type="text" 
                      className="search-input" 
                      placeholder="Your name (optional)" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      disabled={!!status}
                    />
                    <button type="submit" className="resource-link gdoc" style={{ justifyContent: 'center' }} disabled={!!status}>
                      {status || 'Let them know!'}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          );
        }

        /* ============================================
           MAIN APP
           ============================================ */
        function App() {
          const [data, setData] = useState(typeof initialData !== 'undefined' ? initialData : []);
          const [searchTerm, setSearchTerm] = useState("");
          const [debouncedSearch, setDebouncedSearch] = useState("");
          const [activeSubject, setActiveSubject] = useState("All");
          const [copiedId, setCopiedId] = useState(null);
          const [toast, setToast] = useState({ visible: false, message: '' });
          const [linkModal, setLinkModal] = useState({ isOpen: false });
          const [newUrlInput, setNewUrlInput] = useState("");
          const [isChangelogOpen, setIsChangelogOpen] = useState(false);
          const [apiCommits, setApiCommits] = useState([]);
          const [isLoadingCommits, setIsLoadingCommits] = useState(false);
          const [commitError, setCommitError] = useState(null);

          const searchRef = useRef(null);
          const { theme, toggle: toggleTheme } = useTheme();
          const { isLite, toggleLite } = useLiteMode();
          const { easterEggFound, setEasterEggFound, handleLogoClick } = useEasterEggs();

          // Debounce
          useEffect(() => {
            const timer = setTimeout(() => {
              if (searchTerm.toLowerCase() === 'liquidglass') {
                setEasterEggFound(true);
                setSearchTerm("");
              }
              setDebouncedSearch(searchTerm);
            }, 300);
            return () => clearTimeout(timer);
          }, [searchTerm, setEasterEggFound]);

          // Cmd/Ctrl+K
          useEffect(() => {
            const handler = (e) => {
              if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                searchRef.current?.focus();
              }
              if (e.key === 'Escape' && document.activeElement === searchRef.current) {
                setSearchTerm("");
                searchRef.current?.blur();
              }
            };
            window.addEventListener('keydown', handler);
            return () => window.removeEventListener('keydown', handler);
          }, []);

          // GitHub commits
          useEffect(() => {
            if (isChangelogOpen && apiCommits.length === 0) {
              setIsLoadingCommits(true);
              setCommitError(null);
              fetch('https://api.github.com/repos/veeohdi/lectures/commits?per_page=30')
                .then(r => { if (!r.ok) throw new Error(); return r.json(); })
                .then(commits => {
                  const tag = "[UPDATE]";
                  const fmt = commits
                    .filter(c => c.commit.message.toUpperCase().includes(tag))
                    .slice(0, 5)
                    .map(c => ({
                      sha: c.sha,
                      date: new Date(c.commit.author.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                      changes: c.commit.message.replace(/\[UPDATE\]/gi, '').split('\n').filter(l => l.trim()),
                      url: c.html_url,
                    }));
                  setApiCommits(fmt);
                  setIsLoadingCommits(false);
                })
                .catch(() => {
                  setCommitError("Could not connect to GitHub.");
                  setIsLoadingCommits(false);
                });
            }
          }, [isChangelogOpen, apiCommits.length]);

          // Atmosphere shift — set data-subject on root to trigger CSS color morph
          useEffect(() => {
            const root = document.documentElement;
            if (activeSubject === "All") {
              delete root.dataset.subject;
            } else {
              const meta = getSubjectMeta(activeSubject);
              root.dataset.subject = meta.key;
            }
            return () => { delete document.documentElement.dataset.subject; };
          }, [activeSubject]);

          const showToast = useCallback((msg) => {
            setToast({ visible: true, message: msg });
            setTimeout(() => setToast({ visible: false, message: '' }), 3000);
          }, []);

          const handleSaveLink = useCallback(() => {
            if (newUrlInput.trim()) {
              const d = [...data];
              const { subjectIdx, sectionIdx, topicId, type } = linkModal;
              const ti = d[subjectIdx].sections[sectionIdx].topics.findIndex(t => t.id === topicId);
              if (ti > -1) {
                d[subjectIdx].sections[sectionIdx].topics[ti][type] = newUrlInput;
                setData(d);
                showToast(`Linked to ${type === 'gdoc' ? 'Google Docs' : 'NotebookLM'}!`);
              }
            }
            setLinkModal({ isOpen: false });
            setNewUrlInput("");
          }, [data, linkModal, newUrlInput, showToast]);

          const handleCopy = useCallback((url, id) => {
            navigator.clipboard.writeText(url);
            setCopiedId(id);
            showToast("Link copied!");
            setTimeout(() => setCopiedId(null), 2000);
          }, [showToast]);



          const filteredData = useMemo(() => {
            return data
              .filter(s => activeSubject === "All" || s.subject === activeSubject)
              .map(s => ({
                ...s,
                sections: s.sections
                  .map(sec => ({ ...sec, topics: sec.topics.filter(t => t.title.toLowerCase().includes(debouncedSearch.toLowerCase()) || isFuzzyMatch(debouncedSearch, t.title)) }))
                  .filter(sec => sec.topics.length > 0)
              }))
              .filter(s => s.sections.length > 0);
          }, [data, debouncedSearch, activeSubject]);

          const totalTopics = filteredData.reduce((a, s) => a + s.sections.reduce((b, sec) => b + sec.topics.length, 0), 0);

          return (
            <div className="app-container">
              {/* ─── HEADER ─── */}
              <header className="header">
                <div className="header-top">
                  <div className="brand">
                    <h1 className="brand-title" onClick={handleLogoClick} style={{ cursor: 'pointer', userSelect: 'none' }}>MedVault</h1>
                    <div className="brand-subtitle">
                      <span className="brand-tagline">Pathology & Pharmacology Lecture Archive</span>
                      <span className="stat-badge">
                        <span className="stat-dot" aria-hidden="true"></span>
                        {totalTopics} Topics
                      </span>
                    </div>
                    <div className="header-actions">
                      <button
                        id="lite-toggle"
                        className={`icon-btn ${isLite ? 'active' : ''}`}
                        onClick={toggleLite}
                        title={isLite ? "Switch to Full Experience" : "Switch to Lite Mode (Faster)"}
                        aria-label="Toggle Lite Mode"
                      >
                        ⚡ {isLite ? 'Lite Mode On' : 'Lite Mode Off'}
                      </button>
                      <button id="changelog-btn" className="icon-btn" onClick={() => setIsChangelogOpen(true)}>
                        <IconHistory size={14} /> Changelog
                      </button>
                      <button
                        id="theme-toggle"
                        className="icon-btn theme-toggle"
                        onClick={toggleTheme}
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                      >
                        {theme === 'light' ? <IconMoon size={17} /> : <IconSun size={17} />}
                      </button>
                    </div>
                  </div>

                  <div className="search-area">
                    <div className="search-container">
                      <IconSearch size={16} className="search-icon" />
                      <input
                        id="search-input"
                        ref={searchRef}
                        type="text"
                        placeholder="Search lectures…"
                        className="search-input"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      <span className="search-shortcut" aria-hidden="true">⌘K</span>
                    </div>
                  </div>
                </div>

                <nav className="filters" aria-label="Filter by subject">
                  <button
                    id="filter-all"
                    className={`filter-pill ${activeSubject === "All" ? "active active-all" : ""}`}
                    onClick={() => setActiveSubject("All")}
                  >All Subjects</button>
                  {data.map(subj => {
                    const m = getSubjectMeta(subj.subject);
                    const on = activeSubject === subj.subject;
                    return (
                      <button
                        key={subj.subject}
                        id={`filter-${m.key}`}
                        className={`filter-pill ${on ? `active active-${m.key}` : ""}`}
                        onClick={() => setActiveSubject(subj.subject)}
                      >
                        <span className="pill-dot" style={{ background: on ? 'currentColor' : `var(--accent-${m.key})` }} aria-hidden="true"></span>
                        {subj.subject}
                      </button>
                    );
                  })}
                </nav>
              </header>

              {/* ─── CONTENT ─── */}
              <main className="content-area">
                <AnimatePresence mode="popLayout">
                  {filteredData.length === 0 ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="empty-state glass glass-glow"
                    >
                      <div className="glass-bg" aria-hidden="true"></div>
                      <div className="empty-state-icon"><IconSearch size={48} /></div>
                      <h3>No topics found</h3>
                      <p>Try adjusting your search or filters.</p>
                    </motion.div>
                  ) : (
                    filteredData.map(subject => {
                      const meta = getSubjectMeta(subject.subject);
                      const SubjectIcon = meta.icon;
                      return (
                        <motion.section
                          key={subject.subject}
                          layout
                          initial={isLite ? { opacity: 0 } : { opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="subject-section"
                        >
                          <div className="subject-header">
                            <div className={`subject-icon-wrap ${meta.key}`}>
                              <SubjectIcon size={22} />
                            </div>
                            <h2 className="subject-title">{subject.subject}</h2>
                          </div>

                          <div className="cards-grid">
                            <AnimatePresence>
                              {subject.sections.map((section, secIdx) => {
                                const animProps = isLite
                                  ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
                                  : { 
                                      initial: { opacity: 0, y: 50, scale: 0.95 },
                                      whileInView: { opacity: 1, y: 0, scale: 1 },
                                      viewport: { once: true, margin: "0px 0px -40px 0px" }
                                    };
                                return (
                                  <motion.div
                                    key={section.instructor}
                                    layout
                                    {...animProps}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: isLite ? 0 : secIdx * 0.05 }}
                                    className="instructor-card glass glass-glow"
                                  >
                                  <div className="glass-bg" aria-hidden="true"></div>
                                  <div className="card-header">
                                    <h3 className="card-instructor">{section.instructor}</h3>
                                    <span className="card-count">{section.topics.length}</span>
                                  </div>

                                  <div className="topic-list">
                                    <AnimatePresence>
                                      {section.topics.map(topic => {
                                        const hasG = !!(topic.gdoc && topic.gdoc.trim());
                                        const hasN = !!(topic.nlm && topic.nlm.trim());
                                        const dot = hasG && hasN ? 'full' : (hasG || hasN ? 'partial' : 'none');

                                        return (
                                          <motion.div
                                            key={topic.id}
                                            layout
                                            initial={{ opacity: 0, x: -6 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="topic-item"
                                          >
                                            <div className="topic-title">
                                              <span className={`status-dot ${dot}`} title={hasG && hasN ? 'All resources' : hasG || hasN ? 'Partial' : 'No resources'} aria-hidden="true"></span>
                                              <span>{topic.title}</span>
                                            </div>
                                            <div className="resource-buttons">
                                              {hasG ? (
                                                <div className="resource-btn-group">
                                                  <a href={topic.gdoc} target="_blank" rel="noopener noreferrer" className="resource-link gdoc">
                                                    <IconFileText size={13} /> Docs <IconExternalLink size={10} />
                                                  </a>
                                                  <button className="copy-btn gdoc" onClick={() => handleCopy(topic.gdoc, `${topic.id}-g`)} aria-label="Copy link">
                                                    {copiedId === `${topic.id}-g` ? <IconCheck size={13} /> : <IconCopy size={13} />}
                                                  </button>
                                                </div>
                                              ) : (
                                                <button className="add-link-btn gdoc" onClick={() => setLinkModal({
                                                  isOpen: true, topicId: topic.id, type: 'gdoc',
                                                  subjectIdx: data.findIndex(d => d.subject === subject.subject),
                                                  sectionIdx: data[data.findIndex(d => d.subject === subject.subject)].sections.findIndex(s => s.instructor === section.instructor)
                                                })}><IconPlus size={13} /> Add Docs</button>
                                              )}

                                              {hasN ? (
                                                <div className="resource-btn-group">
                                                  <a href={topic.nlm} target="_blank" rel="noopener noreferrer" className="resource-link nlm">
                                                    <IconBookOpen size={13} /> NotebookLM <IconExternalLink size={10} />
                                                  </a>
                                                  <button className="copy-btn nlm" onClick={() => handleCopy(topic.nlm, `${topic.id}-n`)} aria-label="Copy link">
                                                    {copiedId === `${topic.id}-n` ? <IconCheck size={13} /> : <IconCopy size={13} />}
                                                  </button>
                                                </div>
                                              ) : (
                                                topic.nlm !== undefined && (
                                                  <button className="add-link-btn nlm" onClick={() => setLinkModal({
                                                    isOpen: true, topicId: topic.id, type: 'nlm',
                                                    subjectIdx: data.findIndex(d => d.subject === subject.subject),
                                                    sectionIdx: data[data.findIndex(d => d.subject === subject.subject)].sections.findIndex(s => s.instructor === section.instructor)
                                                  })}><IconPlus size={13} /> Add Notebook</button>
                                                )
                                              )}
                                            </div>
                                          </motion.div>
                                        );
                                      })}
                                    </AnimatePresence>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </AnimatePresence>
                          </div>
                        </motion.section>
                      );
                    })
                  )}
                </AnimatePresence>
              </main>

              {/* ─── LINK MODAL ─── */}
              <AnimatePresence>
                {linkModal.isOpen && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay" onClick={e => e.target === e.currentTarget && setLinkModal({ isOpen: false })}>
                    <motion.div initial={{ scale: 0.94, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 12 }} transition={{ type: "spring", damping: 28, stiffness: 380 }} className="modal-panel">
                      <div className="glass-bg" aria-hidden="true"></div>
                      <div className="modal-body">
                        <h3 className="link-modal-title">Add {linkModal.type === 'gdoc' ? 'Google Docs' : 'NotebookLM'} Link</h3>
                        <p className="link-modal-desc">Paste the document URL below to link it to this topic.</p>
                        <input autoFocus type="url" value={newUrlInput} onChange={e => setNewUrlInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSaveLink()} className="link-input" placeholder="https://…" id="link-url-input" />
                        <div className="modal-actions">
                          <button className="btn btn-ghost" onClick={() => setLinkModal({ isOpen: false })}>Cancel</button>
                          <button className="btn btn-primary" onClick={handleSaveLink}>Save Link</button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ─── CHANGELOG MODAL ─── */}
              <AnimatePresence>
                {isChangelogOpen && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay" onClick={e => e.target === e.currentTarget && setIsChangelogOpen(false)}>
                    <motion.div initial={{ scale: 0.94, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 12 }} transition={{ type: "spring", damping: 28, stiffness: 380 }} className="modal-panel wide">
                      <div className="glass-bg" aria-hidden="true"></div>
                      <div className="modal-header">
                        <h2 className="modal-title"><IconHistory size={18} style={{ color: 'var(--accent-active)' }} /> Latest Updates</h2>
                        <button className="modal-close" onClick={() => setIsChangelogOpen(false)} aria-label="Close"><IconX size={15} /></button>
                      </div>
                      <div className="modal-body">
                        {isLoadingCommits && <div className="loader-container"><div className="loader"></div><p className="loader-text">Fetching updates from GitHub…</p></div>}
                        {commitError && <p className="error-text">{commitError}</p>}
                        {!isLoadingCommits && !commitError && apiCommits.length === 0 && <p className="muted-text">No recent updates found.</p>}
                        {!isLoadingCommits && !commitError && apiCommits.length > 0 && (
                          <div className="timeline">
                            {apiCommits.map(log => (
                              <div key={log.sha} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                                  <span className="timeline-date">{log.date}</span>
                                  <a href={log.url} target="_blank" rel="noopener noreferrer" className="timeline-link">view commit</a>
                                </div>
                                <ul className="timeline-changes">
                                  {log.changes.map((c, i) => <li key={i} className="timeline-change">{c}</li>)}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ─── EASTER EGG MODAL ─── */}
              <AnimatePresence>
                {easterEggFound && <EasterEggModal onClose={() => setEasterEggFound(false)} />}
              </AnimatePresence>

              {/* ─── TOAST ─── */}
              <div className={`toast ${toast.visible ? 'visible' : 'hidden'}`} role="status" aria-live="polite">
                <div className="glass-bg" aria-hidden="true"></div>
                <IconCheck size={14} className="toast-icon" />
                {toast.message}
              </div>

              {/* ─── FOOTER ─── */}
              <footer className="footer">
                <p className="footer-text">
                  Built for medical students · <a href="https://github.com/veeohdi/lectures" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                </p>
              </footer>
            </div>
          );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
