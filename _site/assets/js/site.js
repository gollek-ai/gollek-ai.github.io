/**
 * Gollek SDK - Site JavaScript
 * Handles sidebar navigation, theme switching, and UI interactions
 */

(function() {
  'use strict';

  // ────────────────────────────────────────────────────────
  // DOM Elements
  // ────────────────────────────────────────────────────────
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose = document.getElementById('sidebar-close');
  const themeToggle = document.getElementById('theme-toggle');
  const themeOptions = document.querySelectorAll('.theme-option');
  const html = document.documentElement;

  // ────────────────────────────────────────────────────────
  // Sidebar Management
  // ────────────────────────────────────────────────────────
  
  /**
   * Open sidebar on mobile
   */
  function openSidebar() {
    if (window.innerWidth <= 1024) {
      sidebar.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Close sidebar on mobile
   */
  function closeSidebar() {
    sidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /**
   * Toggle sidebar state
   */
  function toggleSidebar() {
    if (sidebar.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  // Event listeners for sidebar
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  // Close sidebar when clicking on a nav item (mobile)
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 1024) {
        closeSidebar();
      }
    }, 250);
  });

  // ────────────────────────────────────────────────────────
  // Theme Management
  // ────────────────────────────────────────────────────────
  
  /**
   * Set theme
   * @param {string} theme - 'dark', 'light', or 'auto'
   */
  function setTheme(theme) {
    // Save to localStorage
    try {
      localStorage.setItem('gollek-theme', theme);
    } catch (e) {
      console.warn('Could not save theme preference:', e);
    }

    // Apply theme
    if (theme === 'auto') {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      html.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
    } else {
      html.setAttribute('data-theme', theme);
    }

    // Update active state on theme buttons
    themeOptions.forEach(option => {
      option.classList.toggle('active', option.dataset.theme === theme);
    });
  }

  /**
   * Get current theme from localStorage or default to 'auto'
   * @returns {string} Current theme
   */
  function getTheme() {
    try {
      return localStorage.getItem('gollek-theme') || 'auto';
    } catch (e) {
      return 'auto';
    }
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme options
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      setTheme(option.dataset.theme);
    });
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (getTheme() === 'auto') {
        setTheme('auto');
      }
    });
  }

  // ────────────────────────────────────────────────────────
  // Copy Code Functionality
  // ────────────────────────────────────────────────────────

  /**
   * Add copy buttons to code blocks
   */
  function initCopyCode() {
    // Target both Jekyll/Rouge highlighted blocks and standard pre blocks
    const codeBlocks = document.querySelectorAll('.highlighter-rouge, div.highlight, pre');

    codeBlocks.forEach(block => {
      // Skip if already has copy button
      if (block.querySelector('.copy-button')) return;
      
      // Skip if this is a nested pre inside highlighter-rouge
      if (block.closest('.highlighter-rouge') || block.closest('div.highlight')) {
        if (block.tagName === 'PRE') return;
      }

      // Create copy button container
      const toolbar = document.createElement('div');
      toolbar.className = 'code-toolbar';

      // Get language from code element or parent
      let codeElement = block.querySelector('code');
      
      // For Jekyll blocks, code might be nested
      if (!codeElement) {
        codeElement = block.querySelector('pre code');
      }
      
      // For highlighter-rouge divs, look for pre > code
      if (block.classList.contains('highlighter-rouge') || block.classList.contains('highlight')) {
        const pre = block.querySelector('pre');
        if (pre) {
          codeElement = pre.querySelector('code');
          // Insert toolbar before the pre element
          if (pre) {
            pre.parentNode.insertBefore(toolbar, pre);
          }
        }
      }
      
      const language = codeElement ? getLanguageFromClass(codeElement.className) : 'code';

      // Language label
      const langLabel = document.createElement('span');
      langLabel.className = 'code-lang';
      langLabel.textContent = language;

      // Copy button with SVG icon
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-button';
      copyBtn.type = 'button';
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
        <span>Copy</span>
      `;

      copyBtn.addEventListener('click', async () => {
        const codeText = codeElement ? codeElement.textContent.trim() : '';

        try {
          await navigator.clipboard.writeText(codeText);
          
          // Change to checkmark icon and "Copied!" text
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            <span>Copied!</span>
          `;

          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
              <span>Copy</span>
            `;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
          
          // Show error state
          copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Failed</span>
          `;
          
          setTimeout(() => {
            copyBtn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
              <span>Copy</span>
            `;
          }, 2000);
        }
      });

      toolbar.appendChild(langLabel);
      toolbar.appendChild(copyBtn);

      // For standard pre blocks (not Jekyll highlighted)
      if (!block.classList.contains('highlighter-rouge') && !block.classList.contains('highlight')) {
        block.insertBefore(toolbar, block.firstChild);
      }
    });
  }

  /**
   * Extract language from class name
   * @param {string} className - Class string
   * @returns {string} Language name
   */
  function getLanguageFromClass(className) {
    if (!className) return 'code';
    
    const langMatch = className.match(/language-(\w+)/);
    if (langMatch) {
      return langMatch[1];
    }
    
    // Common language classes
    const languages = ['javascript', 'js', 'java', 'python', 'py', 'bash', 'shell', 'json', 'xml', 'html', 'css', 'sql'];
    for (const lang of languages) {
      if (className.includes(lang)) {
        return lang;
      }
    }
    
    return 'code';
  }

  // ────────────────────────────────────────────────────────
  // Active Navigation Highlighting
  // ────────────────────────────────────────────────────────
  
  /**
   * Highlight active navigation item based on current URL
   */
  function initActiveNav() {
    const currentPath = window.location.pathname;
    
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (!href) return;
      
      // Remove existing active class
      item.classList.remove('active');
      
      // Check if this nav item matches current path
      if (href === currentPath) {
        item.classList.add('active');
      } else if (href !== '/' && currentPath.startsWith(href)) {
        item.classList.add('active');
      }
    });
  }

  // ────────────────────────────────────────────────────────
  // Smooth Scroll for Anchor Links
  // ────────────────────────────────────────────────────────
  
  /**
   * Enable smooth scrolling for anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ────────────────────────────────────────────────────────
  // Typing Effect (for homepage demo)
  // ────────────────────────────────────────────────────────
  
  /**
   * Typing effect for terminal demo
   */
  function initTypingEffect() {
    const typingElement = document.getElementById('typing-effect');
    if (!typingElement) return;
    
    const command = typingElement.dataset.command;
    const result = typingElement.dataset.result;
    
    if (!command) return;
    
    let charIndex = 0;
    let isTyping = true;
    
    function type() {
      if (charIndex < command.length && isTyping) {
        typingElement.textContent = command.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, 50 + Math.random() * 50);
      } else if (isTyping) {
        isTyping = false;
        setTimeout(showResult, 500);
      }
    }
    
    function showResult() {
      if (result) {
        typingElement.innerHTML = command + '\n' + result.replace(/\n/g, '<br>');
      }
    }
    
    // Start typing when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          type();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(typingElement);
  }

  // ────────────────────────────────────────────────────────
  // Table of Contents (for documentation pages)
  // ────────────────────────────────────────────────────────
  
  /**
   * Generate table of contents from headings
   */
  function initTableOfContents() {
    const tocContainer = document.getElementById('table-of-contents');
    if (!tocContainer) return;
    
    const headings = document.querySelectorAll('.content-card h2, .content-card h3');
    if (headings.length === 0) return;
    
    const toc = document.createElement('nav');
    toc.className = 'table-of-contents';
    toc.setAttribute('aria-label', 'Table of contents');
    
    const tocList = document.createElement('ul');
    
    headings.forEach(heading => {
      const id = heading.id || generateIdFromText(heading.textContent);
      heading.id = id;
      
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = heading.textContent;
      a.className = `toc-link toc-${heading.tagName.toLowerCase()}`;
      
      li.appendChild(a);
      tocList.appendChild(li);
    });
    
    toc.appendChild(tocList);
    tocContainer.appendChild(toc);
  }

  /**
   * Generate ID from text
   * @param {string} text - Heading text
   * @returns {string} Generated ID
   */
  function generateIdFromText(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // ────────────────────────────────────────────────────────
  // Search Functionality (placeholder for future implementation)
  // ────────────────────────────────────────────────────────
  
  /**
   * Initialize search functionality
   */
  function initSearch() {
    const searchInput = document.getElementById('site-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      
      // Future: Implement search functionality
      console.log('Search query:', query);
    });
    
    // Keyboard shortcut for search (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // ────────────────────────────────────────────────────────
  // Notification System
  // ────────────────────────────────────────────────────────
  
  /**
   * Show notification
   * @param {string} message - Notification message
   * @param {string} type - Notification type (success, error, info, warning)
   */
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      borderRadius: 'var(--radius-md)',
      backgroundColor: type === 'success' ? 'var(--success-bg)' :
                       type === 'error' ? 'var(--danger-bg)' :
                       type === 'warning' ? 'var(--warning-bg)' : 'var(--info-bg)',
      border: `1px solid ${type === 'success' ? 'var(--success)' :
                           type === 'error' ? 'var(--danger)' :
                           type === 'warning' ? 'var(--warning)' : 'var(--info)'}`,
      color: 'var(--text-primary)',
      zIndex: '1000',
      animation: 'fadeIn 0.3s ease',
      boxShadow: 'var(--shadow-lg)'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'fadeIn 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Expose to global scope for external use
  window.gollekUI = {
    showNotification,
    openSidebar,
    closeSidebar,
    setTheme
  };

  // ────────────────────────────────────────────────────────
  // Initialize on DOM Ready
  // ────────────────────────────────────────────────────────
  
  function init() {
    // Initialize theme
    setTheme(getTheme());
    
    // Initialize features
    initCopyCode();
    initActiveNav();
    initSmoothScroll();
    initTypingEffect();
    initTableOfContents();
    initSearch();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ────────────────────────────────────────────────────────
  // Mermaid.js Integration (for diagrams)
  // ────────────────────────────────────────────────────────
  
  /**
   * Initialize Mermaid diagrams
   */
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'Space Grotesk, sans-serif'
    });
  }

})();
