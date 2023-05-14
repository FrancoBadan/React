const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWM0NjBhZWQyMWVjNTgyNDdlYjE1OGE0ZDVlZGI4YiIsInN1YiI6IjY0MjYwNWRlYTNlNGJhMDBmMjMzNzUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VxD53RQ6t6zUZWbgKK8gDv1RYZ3aJN1OMm9YK6rl5tI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
};
