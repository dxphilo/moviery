

export const state = () => ({
  moviedata: []
})

export const mutations = {
  storeMovies(state,movies) {
    state.moviedata.push(movies)
  }
}

export const actions = { 
  async getMovies(store) {
    store.commit('storeMovies',movies);
  } 
}