console.log('funguju!');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });