# My Movies App

Project Movies App ini saya beri nama [Fath Movies](https://fath-movies.netlify.app/) yang diambil dari nama saya sendiri dan tema dari project yang saya buat. Project ini adalah salah satu tugas yang diberikan selama melakukan bootcamp di Alterra Academy.

https://fath-movies.netlify.app/

<hr />

## Fath Movies

Web Movies yang saya buat ini menggunakan framework ReactJS dan menggunakan CSS framework Bootstrap. Untuk deployment, saya mendeploy ke situs [Netlify](https://www.netlify.com/). Untuk halaman Home, Detail dan Search mengambil dari API [TMDB](https://www.themoviedb.org/settings/api). Sedangkan untuk fitur add favorite dan remove favorite menggunakan localStorage.

<hr />

## API

### Home

```
https://api.themoviedb.org/3/movie/now_playing?api_key=<<API_KEY>>&language=en-US&page=1

```
### Search

```
https://api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&language=en-US&page=1&include_adult=false&query=
```

### Detail

```
Detail Movie:
https://api.themoviedb.org/3/movie/<<MOVIE_ID>>?api_key=<<API_KEY>>&language=en-US

Recomendations:
https://api.themoviedb.org/3/movie/<<MOVIE_ID>>/recommendations?api_key=<<API_KEY>>&language=en-US&page=1
```