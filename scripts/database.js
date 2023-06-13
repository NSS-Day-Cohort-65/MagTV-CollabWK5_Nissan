const database = {
  actors: [
    {
      id: 1,
      actorName: "Tom Hanks"
    },
    {
      id: 2,
      actorName: "Meryl Streep"
    },
    {
      id: 3,
      actorName: "Leonardo DiCaprio"
    },
    {
      id: 4,
      actorName: "Jennifer Lawrence"
    },
    {
      id: 5,
      actorName: "Brad Pitt"
    },
    {
      id: 6,
      actorName: "Scarlett Johansson"
    },
    {
      id: 7,
      actorName: "Robert Downey Jr."
    },
    {
      id: 8,
      actorName: "Cate Blanchett"
    },
    {
      id: 9,
      actorName: "Denzel Washington"
    },
    {
      id: 10,
      actorName: "Angelina Jolie"
    }
  ],
  genres: [
    {
      id: 1,
      genreName: "Action"
    },
    {
      id: 2,
      genreName: "Comedy"
    },
    {
      id: 3,
      genreName: "Drama"
    },
    {
      id: 4,
      genreName: "Horror"
    },
    {
      id: 5,
      genreName: "Romance"
    },
    {
      id: 6,
      genreName: "Thriller"
    },
    {
      id: 7,
      genreName: "Science Fiction"
    },
    {
      id: 8,
      genreName: "Fantasy"
    },
    {
      id: 9,
      genreName: "Mystery"
    },
    {
      id: 10,
      genreName: "Animation"
    }
  ],
  shows:[
    {
      id: 1,
      showName: "Friends",
      actorId: 1,
      genreId: 2
    },
    {
      id: 2,
      showName: "Breaking Bad",
      actorId: 2,
      genreId: 3
    },
    {
      id: 3,
      showName: "Stranger Things",
      actorId: 3,
      genreId: 7
    },
    {
      id: 4,
      showName: "Game of Thrones",
      actorId: 4,
      genreId: 8
    },
    {
      id: 5,
      showName: "The Office",
      actorId: 5,
      genreId: 2
    },
    {
      id: 6,
      showName: "Sherlock",
      actorId: 6,
      genreId: 9
    },
    {
      id: 7,
      showName: "The Big Bang Theory",
      actorId: 7,
      genreId: 2
    },
    {
      id: 8,
      showName: "Stranger Things",
      actorId: 8,
      genreId: 7
    },
    {
      id: 9,
      showName: "Breaking Bad",
      actorId: 9,
      genreId: 3
    },
    {
      id: 10,
      showName: "Game of Thrones",
      actorId: 10,
      genreId: 8
    },
    {
      id: 11,
      showName: "The Office",
      actorId: 1,
      genreId: 2
    },
    {
      id: 12,
      showName: "Sherlock",
      actorId: 2,
      genreId: 9
    },
    {
      id: 13,
      showName: "The Big Bang Theory",
      actorId: 3,
      genreId: 2
    },
    {
      id: 14,
      showName: "Friends",
      actorId: 4,
      genreId: 2
    },
    {
      id: 15,
      showName: "Stranger Things",
      actorId: 5,
      genreId: 7
    },
    {
      id: 16,
      showName: "Breaking Bad",
      actorId: 6,
      genreId: 3
    },
    {
      id: 17,
      showName: "Game of Thrones",
      actorId: 7,
      genreId: 8
    },
    {
      id: 18,
      showName: "The Office",
      actorId: 8,
      genreId: 2
    },
    {
      id: 19,
      showName: "Sherlock",
      actorId: 9,
      genreId: 9
    },
    {
      id: 20,
      showName: "The Big Bang Theory",
      actorId: 10,
      genreId: 2
    }
  ]
}

export const getShows = () => {
  return database.shows.map(show=>({...show}))
}

export const getGenres = () => {
  return database.genres.map(genre=>({...genre}))
}

export const getActors = () => {
  return database.actors.map(actor=>({...actor}))
}