const {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback
} = React;
const {
  motion,
  AnimatePresence
} = window.Motion;

/* ─── SVG ICONS ─── */
const Icon = ({
  children,
  size = 24,
  className = "",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className,
  style: style
}, children);
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const IconFileText = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "13",
  x2: "8",
  y2: "13"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "17",
  x2: "8",
  y2: "17"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "9",
  x2: "8",
  y2: "9"
}));
const IconBookOpen = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
}));
const IconPlus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const IconExternalLink = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "14",
  x2: "21",
  y2: "3"
}));
const IconX = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const IconCopy = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "9",
  width: "13",
  height: "13",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
}));
const IconCheck = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const IconHistory = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3v5h5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v5l4 2"
}));

// Sun icon for light mode
const IconSun = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 20v2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m4.93 4.93 1.41 1.41"
}), /*#__PURE__*/React.createElement("path", {
  d: "m17.66 17.66 1.41 1.41"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 12h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6.34 17.66-1.41 1.41"
}), /*#__PURE__*/React.createElement("path", {
  d: "m19.07 4.93-1.41 1.41"
}));

// Moon icon for dark mode
const IconMoon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));

// Subject icons
const IconMicroscope = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 18h8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 22h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 22a7 7 0 1 0 0-14h-1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 14h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
}));
const IconBeaker = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4.5 3h15"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 14h12"
}));
const IconDroplet = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
}));
const IconShieldAlert = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "16",
  x2: "12.01",
  y2: "16"
}));
const IconPill = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m8.5 8.5 7 7"
}));

/* ─── SUBJECT METADATA ─── */
const SUBJECT_META = {
  "Anatomical Pathology": {
    key: "pathology",
    icon: IconMicroscope
  },
  "Chemical Pathology": {
    key: "chemistry",
    icon: IconBeaker
  },
  "Haematology": {
    key: "haematology",
    icon: IconDroplet
  },
  "Medical Microbiology": {
    key: "microbiology",
    icon: IconShieldAlert
  },
  "Pharmacology": {
    key: "pharmacology",
    icon: IconPill
  }
};
const getSubjectMeta = name => SUBJECT_META[name] || {
  key: "pathology",
  icon: IconBookOpen
};
const isFuzzyMatch = (pattern, str) => {
  if (!pattern) return true;
  const re = new RegExp(pattern.split('').map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*'), 'i');
  return re.test(str);
};

/* ─── THEME HOOK ─── */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light';
  });
  const toggle = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('medvault-theme', next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#08080f' : '#f0f2f7');
  }, [theme]);
  return {
    theme,
    toggle
  };
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
  const [toast, setToast] = useState({
    visible: false,
    message: ''
  });
  const [linkModal, setLinkModal] = useState({
    isOpen: false
  });
  const [newUrlInput, setNewUrlInput] = useState("");
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [apiCommits, setApiCommits] = useState([]);
  const [isLoadingCommits, setIsLoadingCommits] = useState(false);
  const [commitError, setCommitError] = useState(null);
  const searchRef = useRef(null);
  const {
    theme,
    toggle: toggleTheme
  } = useTheme();

  // Debounce
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm), 200);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Cmd/Ctrl+K
  useEffect(() => {
    const handler = e => {
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
      fetch('https://api.github.com/repos/veeohdi/lectures/commits?per_page=30').then(r => {
        if (!r.ok) throw new Error();
        return r.json();
      }).then(commits => {
        const tag = "[UPDATE]";
        const fmt = commits.filter(c => c.commit.message.toUpperCase().includes(tag)).slice(0, 5).map(c => ({
          sha: c.sha,
          date: new Date(c.commit.author.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          changes: c.commit.message.replace(/\[UPDATE\]/gi, '').split('\n').filter(l => l.trim()),
          url: c.html_url
        }));
        setApiCommits(fmt);
        setIsLoadingCommits(false);
      }).catch(() => {
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
    return () => {
      delete document.documentElement.dataset.subject;
    };
  }, [activeSubject]);
  const showToast = useCallback(msg => {
    setToast({
      visible: true,
      message: msg
    });
    setTimeout(() => setToast({
      visible: false,
      message: ''
    }), 3000);
  }, []);
  const handleSaveLink = useCallback(() => {
    if (newUrlInput.trim()) {
      const d = [...data];
      const {
        subjectIdx,
        sectionIdx,
        topicId,
        type
      } = linkModal;
      const ti = d[subjectIdx].sections[sectionIdx].topics.findIndex(t => t.id === topicId);
      if (ti > -1) {
        d[subjectIdx].sections[sectionIdx].topics[ti][type] = newUrlInput;
        setData(d);
        showToast(`Linked to ${type === 'gdoc' ? 'Google Docs' : 'NotebookLM'}!`);
      }
    }
    setLinkModal({
      isOpen: false
    });
    setNewUrlInput("");
  }, [data, linkModal, newUrlInput, showToast]);
  const handleCopy = useCallback((url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    showToast("Link copied!");
    setTimeout(() => setCopiedId(null), 2000);
  }, [showToast]);
  const filteredData = useMemo(() => {
    return data.filter(s => activeSubject === "All" || s.subject === activeSubject).map(s => ({
      ...s,
      sections: s.sections.map(sec => ({
        ...sec,
        topics: sec.topics.filter(t => t.title.toLowerCase().includes(debouncedSearch.toLowerCase()) || isFuzzyMatch(debouncedSearch, t.title))
      })).filter(sec => sec.topics.length > 0)
    })).filter(s => s.sections.length > 0);
  }, [data, debouncedSearch, activeSubject]);
  const totalTopics = filteredData.reduce((a, s) => a + s.sections.reduce((b, sec) => b + sec.topics.length, 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "brand-title"
  }, "MedVault"), /*#__PURE__*/React.createElement("div", {
    className: "brand-subtitle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-tagline"
  }, "Pathology & Pharmacology Lecture Archive"), /*#__PURE__*/React.createElement("span", {
    className: "stat-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-dot",
    "aria-hidden": "true"
  }), totalTopics, " Topics")), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement("button", {
    id: "changelog-btn",
    className: "icon-btn",
    onClick: () => setIsChangelogOpen(true)
  }, /*#__PURE__*/React.createElement(IconHistory, {
    size: 14
  }), " Changelog"), /*#__PURE__*/React.createElement("button", {
    id: "theme-toggle",
    className: "icon-btn theme-toggle",
    onClick: toggleTheme,
    title: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
    "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`
  }, theme === 'light' ? /*#__PURE__*/React.createElement(IconMoon, {
    size: 17
  }) : /*#__PURE__*/React.createElement(IconSun, {
    size: 17
  })))), /*#__PURE__*/React.createElement("div", {
    className: "search-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 16,
    className: "search-icon"
  }), /*#__PURE__*/React.createElement("input", {
    id: "search-input",
    ref: searchRef,
    type: "text",
    placeholder: "Search lectures\u2026",
    className: "search-input",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("span", {
    className: "search-shortcut",
    "aria-hidden": "true"
  }, "\u2318K")))), /*#__PURE__*/React.createElement("nav", {
    className: "filters",
    "aria-label": "Filter by subject"
  }, /*#__PURE__*/React.createElement("button", {
    id: "filter-all",
    className: `filter-pill ${activeSubject === "All" ? "active active-all" : ""}`,
    onClick: () => setActiveSubject("All")
  }, "All Subjects"), data.map(subj => {
    const m = getSubjectMeta(subj.subject);
    const on = activeSubject === subj.subject;
    return /*#__PURE__*/React.createElement("button", {
      key: subj.subject,
      id: `filter-${m.key}`,
      className: `filter-pill ${on ? `active active-${m.key}` : ""}`,
      onClick: () => setActiveSubject(subj.subject)
    }, /*#__PURE__*/React.createElement("span", {
      className: "pill-dot",
      style: {
        background: on ? 'currentColor' : `var(--accent-${m.key})`
      },
      "aria-hidden": "true"
    }), subj.subject);
  }))), /*#__PURE__*/React.createElement("main", {
    className: "content-area"
  }, /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "popLayout"
  }, filteredData.length === 0 ? /*#__PURE__*/React.createElement(motion.div, {
    key: "empty",
    initial: {
      opacity: 0,
      scale: 0.96
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0
    },
    className: "empty-state glass glass-glow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty-state-icon"
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 48
  })), /*#__PURE__*/React.createElement("h3", null, "No topics found"), /*#__PURE__*/React.createElement("p", null, "Try adjusting your search or filters.")) : filteredData.map(subject => {
    const meta = getSubjectMeta(subject.subject);
    const SubjectIcon = meta.icon;
    return /*#__PURE__*/React.createElement(motion.section, {
      key: subject.subject,
      layout: true,
      initial: {
        opacity: 0,
        y: 20
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        scale: 0.97
      },
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      },
      className: "subject-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "subject-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: `subject-icon-wrap ${meta.key}`
    }, /*#__PURE__*/React.createElement(SubjectIcon, {
      size: 22
    })), /*#__PURE__*/React.createElement("h2", {
      className: "subject-title"
    }, subject.subject)), /*#__PURE__*/React.createElement("div", {
      className: "cards-grid"
    }, /*#__PURE__*/React.createElement(AnimatePresence, null, subject.sections.map((section, secIdx) => /*#__PURE__*/React.createElement(motion.div, {
      key: section.instructor,
      layout: true,
      initial: {
        opacity: 0,
        y: 14
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        scale: 0.96
      },
      transition: {
        duration: 0.3,
        delay: secIdx * 0.05
      },
      className: "instructor-card glass glass-glow"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-header"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "card-instructor"
    }, section.instructor), /*#__PURE__*/React.createElement("span", {
      className: "card-count"
    }, section.topics.length)), /*#__PURE__*/React.createElement("div", {
      className: "topic-list"
    }, /*#__PURE__*/React.createElement(AnimatePresence, null, section.topics.map(topic => {
      const hasG = !!(topic.gdoc && topic.gdoc.trim());
      const hasN = !!(topic.nlm && topic.nlm.trim());
      const dot = hasG && hasN ? 'full' : hasG || hasN ? 'partial' : 'none';
      return /*#__PURE__*/React.createElement(motion.div, {
        key: topic.id,
        layout: true,
        initial: {
          opacity: 0,
          x: -6
        },
        animate: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0
        },
        className: "topic-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "topic-title"
      }, /*#__PURE__*/React.createElement("span", {
        className: `status-dot ${dot}`,
        title: hasG && hasN ? 'All resources' : hasG || hasN ? 'Partial' : 'No resources',
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("span", null, topic.title)), /*#__PURE__*/React.createElement("div", {
        className: "resource-buttons"
      }, hasG ? /*#__PURE__*/React.createElement("div", {
        className: "resource-btn-group"
      }, /*#__PURE__*/React.createElement("a", {
        href: topic.gdoc,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "resource-link gdoc"
      }, /*#__PURE__*/React.createElement(IconFileText, {
        size: 13
      }), " Docs ", /*#__PURE__*/React.createElement(IconExternalLink, {
        size: 10
      })), /*#__PURE__*/React.createElement("button", {
        className: "copy-btn gdoc",
        onClick: () => handleCopy(topic.gdoc, `${topic.id}-g`),
        "aria-label": "Copy link"
      }, copiedId === `${topic.id}-g` ? /*#__PURE__*/React.createElement(IconCheck, {
        size: 13
      }) : /*#__PURE__*/React.createElement(IconCopy, {
        size: 13
      }))) : /*#__PURE__*/React.createElement("button", {
        className: "add-link-btn gdoc",
        onClick: () => setLinkModal({
          isOpen: true,
          topicId: topic.id,
          type: 'gdoc',
          subjectIdx: data.findIndex(d => d.subject === subject.subject),
          sectionIdx: data[data.findIndex(d => d.subject === subject.subject)].sections.findIndex(s => s.instructor === section.instructor)
        })
      }, /*#__PURE__*/React.createElement(IconPlus, {
        size: 13
      }), " Add Docs"), hasN ? /*#__PURE__*/React.createElement("div", {
        className: "resource-btn-group"
      }, /*#__PURE__*/React.createElement("a", {
        href: topic.nlm,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "resource-link nlm"
      }, /*#__PURE__*/React.createElement(IconBookOpen, {
        size: 13
      }), " NotebookLM ", /*#__PURE__*/React.createElement(IconExternalLink, {
        size: 10
      })), /*#__PURE__*/React.createElement("button", {
        className: "copy-btn nlm",
        onClick: () => handleCopy(topic.nlm, `${topic.id}-n`),
        "aria-label": "Copy link"
      }, copiedId === `${topic.id}-n` ? /*#__PURE__*/React.createElement(IconCheck, {
        size: 13
      }) : /*#__PURE__*/React.createElement(IconCopy, {
        size: 13
      }))) : topic.nlm !== undefined && /*#__PURE__*/React.createElement("button", {
        className: "add-link-btn nlm",
        onClick: () => setLinkModal({
          isOpen: true,
          topicId: topic.id,
          type: 'nlm',
          subjectIdx: data.findIndex(d => d.subject === subject.subject),
          sectionIdx: data[data.findIndex(d => d.subject === subject.subject)].sections.findIndex(s => s.instructor === section.instructor)
        })
      }, /*#__PURE__*/React.createElement(IconPlus, {
        size: 13
      }), " Add Notebook")));
    }))))))));
  }))), /*#__PURE__*/React.createElement(AnimatePresence, null, linkModal.isOpen && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "modal-overlay",
    onClick: e => e.target === e.currentTarget && setLinkModal({
      isOpen: false
    })
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      scale: 0.94,
      y: 12
    },
    animate: {
      scale: 1,
      y: 0
    },
    exit: {
      scale: 0.94,
      y: 12
    },
    transition: {
      type: "spring",
      damping: 28,
      stiffness: 380
    },
    className: "modal-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "link-modal-title"
  }, "Add ", linkModal.type === 'gdoc' ? 'Google Docs' : 'NotebookLM', " Link"), /*#__PURE__*/React.createElement("p", {
    className: "link-modal-desc"
  }, "Paste the document URL below to link it to this topic."), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    type: "url",
    value: newUrlInput,
    onChange: e => setNewUrlInput(e.target.value),
    onKeyDown: e => e.key === 'Enter' && handleSaveLink(),
    className: "link-input",
    placeholder: "https://\u2026",
    id: "link-url-input"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => setLinkModal({
      isOpen: false
    })
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleSaveLink
  }, "Save Link")))))), /*#__PURE__*/React.createElement(AnimatePresence, null, isChangelogOpen && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "modal-overlay",
    onClick: e => e.target === e.currentTarget && setIsChangelogOpen(false)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      scale: 0.94,
      y: 12
    },
    animate: {
      scale: 1,
      y: 0
    },
    exit: {
      scale: 0.94,
      y: 12
    },
    transition: {
      type: "spring",
      damping: 28,
      stiffness: 380
    },
    className: "modal-panel wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "modal-title"
  }, /*#__PURE__*/React.createElement(IconHistory, {
    size: 18,
    style: {
      color: 'var(--accent-active)'
    }
  }), " Latest Updates"), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: () => setIsChangelogOpen(false),
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(IconX, {
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, isLoadingCommits && /*#__PURE__*/React.createElement("div", {
    className: "loader-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }), /*#__PURE__*/React.createElement("p", {
    className: "loader-text"
  }, "Fetching updates from GitHub\u2026")), commitError && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, commitError), !isLoadingCommits && !commitError && apiCommits.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "muted-text"
  }, "No recent updates found."), !isLoadingCommits && !commitError && apiCommits.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, apiCommits.map(log => /*#__PURE__*/React.createElement("div", {
    key: log.sha,
    className: "timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-dot"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "timeline-date"
  }, log.date), /*#__PURE__*/React.createElement("a", {
    href: log.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "timeline-link"
  }, "view commit")), /*#__PURE__*/React.createElement("ul", {
    className: "timeline-changes"
  }, log.changes.map((c, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "timeline-change"
  }, c)))))))))), /*#__PURE__*/React.createElement("div", {
    className: `toast ${toast.visible ? 'visible' : 'hidden'}`,
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 14,
    className: "toast-icon"
  }), toast.message), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer-text"
  }, "Built for medical students \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/veeohdi/lectures",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer-link"
  }, "GitHub"))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
