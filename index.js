import { Movie } from './Movie/index.js';

const movies = [
  {
    title: 'Vykoupení z věznice Shawshank',
    url: 'https://www.csfd.cz/film/2294-vykoupeni-z-veznice-shawshank',
    posterUrl:
      'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/162/505/162505167_735db9.jpg',
    year: 1994,
  },
  {
    title: 'Forrest Gump',
    url: 'https://www.csfd.cz/film/10135-forrest-gump',
    posterUrl:
      'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/158/988/158988468_acc7b5.jpg',
    year: 1994,
  },
  {
    title: 'Zelená míle',
    url: 'https://www.csfd.cz/film/2292-zelena-mile',
    posterUrl:
      'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/164/445/164445478_1ed513.jpg',
    year: 1999,
  },
];

for (let i = 0; i < movies.length; i = i + 1) {
  document.querySelector('.movie-list').innerHTML += Movie(movies[i]);
}
