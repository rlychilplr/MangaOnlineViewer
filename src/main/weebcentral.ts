// == WeebCentral ==================================================================================
export default {
  name: 'WeebCentral',
  url: /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,
  homepage: 'https://weebcentral.com/',
  language: ['English'],
  category: 'manga',
  waitEle: 'main section img',
  async run() {
    const src = [...document.querySelectorAll('main section img')].map((elem) =>
      elem.getAttribute('src'),
    );
    const chaptersList = await fetch(
      document.querySelector('main section a + button')?.getAttribute('hx-get') ?? '',
    ).then((res) => res.text());
    const parser = new DOMParser();
    const chapters = parser.parseFromString(chaptersList, 'text/html');
    return {
      title: document.querySelector('title')?.textContent?.replace(/ | .+/, '').trim(),
      series: document.querySelector('main section a')?.getAttribute('href'),
      pages: src.length,
      prev: chapters.querySelector('#selected_chapter')?.nextElementSibling?.getAttribute('href'),
      next: chapters
        .querySelector('#selected_chapter')
        ?.previousElementSibling?.getAttribute('href'),
      listImages: src,
    };
  },
};
