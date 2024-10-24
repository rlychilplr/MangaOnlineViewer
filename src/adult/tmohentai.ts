// == TMOHentai ====================================================================================
export default {
  name: 'TMOHentai',
  url: /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,
  homepage: 'https://tmohentai.com/',
  language: ['Spanish'],
  category: 'hentai',
  run() {
    const src = [...document.querySelectorAll('.content-image')].map(
      (i) => i.getAttribute('data-original') ?? i.getAttribute('src'),
    );
    return {
      before() {
        if (window.location.pathname.includes('paginated')) {
          window.location.pathname = window.location.pathname.replace(/paginated.*/, 'cascade');
        }
      },
      title: document.querySelector('.reader-title')?.textContent?.trim(),
      series: document.querySelector('.nav-justified li a')?.getAttribute('href'),
      pages: src.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
