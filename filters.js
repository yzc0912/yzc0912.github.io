const papers = [...document.querySelectorAll('article')];
const filters = [...document.querySelectorAll('.filters button')];
for (const filter of filters) {
  filter.addEventListener('click', () => {
    for (const button of filters) button.setAttribute('aria-pressed', String(button === filter));
    for (const paper of papers) paper.hidden = filter.textContent !== 'All work' && filter.textContent !== paper.dataset.topic;
    const count = papers.filter(paper => !paper.hidden).length;
    document.querySelector('#count').textContent = count + (count === 1 ? ' paper' : ' papers');
  });
}
