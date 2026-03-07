window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['.\mkdocs.zh.yml', '.\mkdocs.zh.yml'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: '.*|',
    processHtmlClass: 'arithmatex'
  }
};
