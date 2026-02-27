document.addEventListener('DOMContentLoaded', () => {
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
