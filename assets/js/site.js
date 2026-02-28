document.addEventListener('DOMContentLoaded', () => {
  const mermaidBlocks = document.querySelectorAll('pre > code.language-mermaid');
  const mermaidNodes = [];

  mermaidBlocks.forEach((codeEl, index) => {
    const pre = codeEl.parentElement;
    if (!pre) {
      return;
    }
    const container = document.createElement('div');
    container.className = 'mermaid';
    container.id = `mermaid-diagram-${index + 1}`;
    container.textContent = codeEl.textContent || '';
    pre.replaceWith(container);
    mermaidNodes.push(container);
  });

  if (mermaidNodes.length > 0 && window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'neutral'
    });
    window.mermaid.run({ nodes: mermaidNodes });
  }

  const blocks = document.querySelectorAll('pre > code');

  blocks.forEach((codeEl) => {
    const pre = codeEl.parentElement;
    if (!pre || pre.dataset.enhanced === 'true') {
      return;
    }

    pre.dataset.enhanced = 'true';
    pre.classList.add('code-block');

    const toolbar = document.createElement('div');
    toolbar.className = 'code-toolbar';

    const lang = document.createElement('span');
    lang.className = 'code-lang';
    const className = codeEl.className || '';
    const match = className.match(/language-([a-zA-Z0-9_-]+)/);
    lang.textContent = match ? match[1] : 'code';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'Copy';

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeEl.innerText);
        button.textContent = 'Copied';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = 'Copy';
          button.classList.remove('copied');
        }, 1400);
      } catch (error) {
        button.textContent = 'Failed';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 1400);
      }
    });

    toolbar.appendChild(lang);
    toolbar.appendChild(button);
    pre.prepend(toolbar);
  });
});
