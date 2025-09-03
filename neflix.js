const moviesData = [

  { title: "Avengers: Endgame", category: "Trending Now", overview: "Heroes unite to fight Thanos.", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", backdrop: "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
  { title: "Inception", category: "Trending Now", overview: "A thief enters dreams to steal secrets.", poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg" },
  { title: "The Dark Knight", category: "Trending Now", overview: "Batman faces the Joker.", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg" },
  { title: "RRR", category: "Trending Now", overview: "Two revolutionaries fight the British.", poster: "https://image.tmdb.org/t/p/w500/dgXPhzNJH8HFTBjXPB177yNx6RI.jpg", backdrop: "https://image.tmdb.org/t/p/original/u0XUBNQ0cz1gkFCvY6c0SILQhL0.jpg" },
  { title: "Stranger Things", category: "Trending Now", overview: "Kids face supernatural threats in Hawkins.", poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg" },
  { title: "Dangal", category: "Trending Now", overview: "A father trains his daughters to wrestle.", poster: "https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hY5Zk7naHRb.jpg", backdrop: "https://image.tmdb.org/t/p/original/hQZQhFkqkyUdaftwP9NdbW0MncV.jpg" },
  { title: "3 Idiots", category: "Trending Now", overview: "Three students struggle through college life.", poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg", backdrop: "https://image.tmdb.org/t/p/original/yJr7M4CH7LUSlG3LqUOszEMR7c5.jpg" },
  { title: "PK", category: "Trending Now", overview: "An alien questions human behavior.", poster: "https://image.tmdb.org/t/p/w500/aji9fT3v4E3VtA1t6z2WZxM6y5x.jpg", backdrop: "https://image.tmdb.org/t/p/original/yNY1uv6G6asFykBfrFkY1E7aghi.jpg" },
  { title: "Lagaan", category: "Trending Now", overview: "Villagers challenge British to cricket.", poster: "https://image.tmdb.org/t/p/w500/lt3G0NQzq0hHUz3PaY5E9OQj1iw.jpg", backdrop: "https://image.tmdb.org/t/p/original/wv1rFzjW8sELxzRqlE8XjN1ozbE.jpg" },
  { title: "Pushpa", category: "Trending Now", overview: "The rise of a red sandalwood smuggler.", poster: "https://image.tmdb.org/t/p/w500/bbnC2E1GsqBtX9pWQe8wZkMznWj.jpg", backdrop: "https://image.tmdb.org/t/p/original/oVzvKJgqU1pvXpzC9PL2sRqdpYG.jpg" },

  { title: "Iron Man", category: "Hollywood Hits", overview: "Tony Stark becomes Iron Man.", poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", backdrop: "https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg" },
  { title: "Black Panther", category: "Hollywood Hits", overview: "T'Challa becomes king of Wakanda.", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", backdrop: "https://image.tmdb.org/t/p/original/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg" },
  { title: "Thor: Ragnarok", category: "Hollywood Hits", overview: "Thor faces Hela and Ragnarok.", poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", backdrop: "https://image.tmdb.org/t/p/original/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg" },
  { title: "Doctor Strange", category: "Hollywood Hits", overview: "A surgeon becomes the Sorcerer Supreme.", poster: "https://image.tmdb.org/t/p/w500/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg", backdrop: "https://image.tmdb.org/t/p/original/hEtYIEsslq5m9Kz7jLuoZzS6TpE.jpg" },
  { title: "Guardians of the Galaxy", category: "Hollywood Hits", overview: "A band of misfits save the galaxy.", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", backdrop: "https://image.tmdb.org/t/p/original/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg" },
  { title: "Avengers: Infinity War", category: "Hollywood Hits", overview: "Avengers fight Thanos.", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", backdrop: "https://image.tmdb.org/t/p/original/5g1Jq6BWjY2zxJ0F6lOJ7Sx8YlZ.jpg" },
  { title: "Captain America: Civil War", category: "Hollywood Hits", overview: "Avengers face internal conflict.", poster: "https://image.tmdb.org/t/p/w500/kSBXou5Ac7vEqKd97wotJumyJvU.jpg", backdrop: "https://image.tmdb.org/t/p/original/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg" },
  { title: "Spider-Man: No Way Home", category: "Hollywood Hits", overview: "Spider-Man opens the multiverse.", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", backdrop: "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" },
  { title: "Avengers: Age of Ultron", category: "Hollywood Hits", overview: "Avengers battle Ultron.", poster: "https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg", backdrop: "https://image.tmdb.org/t/p/original/nlV7CgmU9rxU8La8yXM3nsoWtAq.jpg" },
  { title: "The Incredible Hulk", category: "Hollywood Hits", overview: "Bruce Banner becomes Hulk.", poster: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAkJYT8dj90Zq.jpg", backdrop: "https://image.tmdb.org/t/p/original/A4sMy40t9YnO22kdtz0g0xGrrnV.jpg" },

  
  { title: "Sholay", category: "Bollywood Blockbusters", overview: "Two criminals hired to stop a bandit.", poster: "https://image.tmdb.org/t/p/w500/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg", backdrop: "https://image.tmdb.org/t/p/original/vHcSsxXw2wvYwjl9gkKd9uT9Euu.jpg" },
  { title: "Bajrangi Bhaijaan", category: "Bollywood Blockbusters", overview: "A man helps a mute girl return home.", poster: "https://image.tmdb.org/t/p/w500/pqef7mZt1CjTtVJjHFdCS1k7a3X.jpg", backdrop: "https://image.tmdb.org/t/p/original/bzDN1x6CFPOnwXzORdzdrIW6DCe.jpg" },
  { title: "Gully Boy", category: "Bollywood Blockbusters", overview: "A street rapper rises to fame.", poster: "https://image.tmdb.org/t/p/w500/5UjuJknNJ9aoY1Lp04YQpA1VdQe.jpg", backdrop: "https://image.tmdb.org/t/p/original/6tIkI6jneih/zgXeVManIeZDV4SSQSSHqzTeWY.jpg" },
  { title: "Zindagi Na Milegi Dobara", category: "Bollywood Blockbusters", overview: "Friends take a life-changing trip.", poster: "https://image.tmdb.org/t/p/w500/n9Td1qT3xuxMxDPZWS9Vyuk3F7S.jpg", backdrop: "https://image.tmdb.org/t/p/original/6cY8jWxnBWCG2lLBVmOAXoJLRV8.jpg" },
  { title: "Kabir Singh", category: "Bollywood Blockbusters", overview: "A surgeon's life spirals after heartbreak.", poster: "https://image.tmdb.org/t/p/w500/m5B8ZkXc4jUY8jHvBtN5V7EwrBw.jpg", backdrop: "https://image.tmdb.org/t/p/original/qCPIP3VzBkYOPxfN3E3xaQa58ae.jpg" },
  { title: "War", category: "Bollywood Blockbusters", overview: "Two soldiers clash on a mission.", poster: "https://image.tmdb.org/t/p/w500/6L8QqfPiwxupRkhKiqX3ZzmYrus.jpg", backdrop: "https://image.tmdb.org/t/p/original/1M5htKp3tWbBaD5mVxDIS1MMJ0p.jpg" },

  
  { title: "Baahubali 2", category: "Tollywood Legends", overview: "Mahendra Baahubali avenges his father.", poster: "https://image.tmdb.org/t/p/w500/wjL6l5nrLQ4J3LzNljJMEVN6M2C.jpg", backdrop: "https://image.tmdb.org/t/p/original/nj8rAX5TlycVjIofQCSKQhbquJr.jpg" },
  { title: "Arjun Reddy", category: "Tollywood Legends", overview: "A surgeon struggles with heartbreak.", poster: "https://image.tmdb.org/t/p/w500/zrN7bQIKXtbUuDdDhcW7UZ5EKeC.jpg", backdrop: "https://image.tmdb.org/t/p/original/5hAObcUUXjD7wMKi5YqQpZgdKID.jpg" },
  { title: "Ala Vaikunthapurramuloo", category: "Tollywood Legends", overview: "A man discovers his true family.", poster: "https://image.tmdb.org/t/p/w500/uk8dXfK7QJtjUyvVqfhBF3nf1Qz.jpg", backdrop: "https://image.tmdb.org/t/p/original/mTdLecxB2S7RMyCV2wAPOQgQnNx.jpg" },
  { title: "Rangasthalam", category: "Tollywood Legends", overview: "A villager battles a corrupt leader.", poster: "https://image.tmdb.org/t/p/w500/sXDNtZUMtYYV9zp1KimG1Hj6kUM.jpg", backdrop: "https://image.tmdb.org/t/p/original/xQ4p2L6M0J2XBZBZ2oN8GJt1M3U.jpg" },
  { title: "Magadheera", category: "Tollywood Legends", overview: "A warrior reborn to fulfill destiny.", poster: "https://image.tmdb.org/t/p/w500/bhOaj6MqFmoVoeAQMtk0iA0WIMh.jpg", backdrop: "https://image.tmdb.org/t/p/original/fy0zT90un0nLBKBPXn1HULICwhf.jpg" },
  { title: "Eega", category: "Tollywood Legends", overview: "A man reincarnates as a housefly.", poster: "https://image.tmdb.org/t/p/w500/y9jHZXUfhocP8GXvyfOkHqe84Im.jpg", backdrop: "https://image.tmdb.org/t/p/original/vXna43E77gzHuLlHotE5RX7V6cz.jpg" },
  { title: "Sarkaru Vaari Paata", category: "Tollywood Legends", overview: "A moneylender battles corruption.", poster: "https://image.tmdb.org/t/p/w500/fI5G4XzXB0ppY7CBuU8lNgqxd6k.jpg", backdrop: "https://image.tmdb.org/t/p/original/hIVd831ydb9h9NP7VDaRao7IhiX.jpg" },
  { title: "Radhe Shyam", category: "Tollywood Legends", overview: "A romantic tale of destiny.", poster: "https://image.tmdb.org/t/p/w500/gc65N0v1tcHTfb3G3Dhd3F7S3P9.jpg", backdrop: "https://image.tmdb.org/t/p/original/hi9Ce2nUj0g2oJ6TP2PumoefRgP.jpg" }
]

function renderHero() {
  const heroTitle = document.getElementById("hero-title")
  const heroOverview = document.getElementById("hero-overview")
  const heroSection = document.getElementById("hero")
  const firstMovie = moviesData[0]

  heroTitle.textContent = firstMovie.title
  heroOverview.textContent = firstMovie.overview
  heroSection.style.backgroundImage = `url(${firstMovie.backdrop})`
}


function renderMovies() {
  const categories = {}
  moviesData.forEach(movie => {
    if (!categories[movie.category]) categories[movie.category] = []
    categories[movie.category].push(movie)
  })

  const container = document.getElementById("movie-rows")
  container.innerHTML = ""

  for (const category in categories) {
    const section = document.createElement("div")
    section.classList.add("category-section")
    section.innerHTML = `<h2>${category}</h2><div class="movies-row"></div>`
    const row = section.querySelector(".movies-row")

    categories[category].forEach(movie => {
      const movieEl = document.createElement("div")
      movieEl.classList.add("movie")
      movieEl.style.backgroundImage = `url(${movie.poster})`
      movieEl.title = movie.title

      
      movieEl.addEventListener("click", () => {
        document.getElementById("modal-title").textContent = movie.title
        document.getElementById("modal-description").textContent = movie.overview
        document.getElementById("modal").classList.remove("hidden")
      })

      row.appendChild(movieEl)
    })
    container.appendChild(section)
  }
}


document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden")
})

document.addEventListener("DOMContentLoaded", () => {
  renderHero()
  renderMovies()
})
const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredMovies = moviesData.filter(movie => movie.title.toLowerCase().includes(query));
  renderMovies(filteredMovies);
});

function renderMovies(filteredData = moviesData) {
  const categories = {};
  filteredData.forEach(movie => {
    if (!categories[movie.category]) categories[movie.category] = [];
    categories[movie.category].push(movie);
  });

  const container = document.getElementById("movies-container");
  container.innerHTML = "";

  for (const category in categories) {
    const section = document.createElement("div");
    section.classList.add("category-section");
    section.innerHTML = `<h2>${category}</h2><div class="movies-row"></div>`;
    const row = section.querySelector(".movies-row");

    categories[category].forEach(movie => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.style.backgroundImage = `url(${movie.poster})`;
      movieEl.title = movie.title;

      movieEl.addEventListener("click", () => {
        document.getElementById("modal-title").textContent = movie.title;
        document.getElementById("modal-description").textContent = movie.overview;
        document.getElementById("modal").classList.remove("hidden");
      });

      row.appendChild(movieEl);
    });

    container.appendChild(section);
  }
}
categories[category].forEach(movie => {
  const movieEl = document.createElement("div");
  movieEl.classList.add("movie");
  

  const img = new Image();
  img.src = movie.poster;
  img.onerror = () => {
    movieEl.style.backgroundImage = `url('https://via.placeholder.com/180x270?text=No+Image')`;
  };
  img.onload = () => {
    movieEl.style.backgroundImage = `url(${movie.poster})`;
  };

  movieEl.title = movie.title;

  movieEl.addEventListener("click", () => {
    document.getElementById("modal-title").textContent = movie.title;
    document.getElementById("modal-description").textContent = movie.overview;
    document.getElementById("modal").classList.remove("hidden");
  });

  row.appendChild(movieEl);
});

