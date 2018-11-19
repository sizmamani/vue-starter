import request from '../../services/request'

export default {
    namespaced: true,
    state: {
      movie : {}
    },
  
    getters: {
      getMovie : state => state.movie
    },
  
    mutations: {
      setMovie(state, payload) {
        state.movie = payload
      }
    },
  
    actions: {
       getAllMovies({commit}){
           request.get("http://www.omdbapi.com/?t=star&apikey=PlzBanMe").then(res=>{
              commit("setMovie", res.body)
           })
       } 
    }
  }