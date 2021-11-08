export const state = () => ({
    counter: 0,
    mobile_view: 1265,
    search_results:'',
  });

export const actions = {
    //add Master File
    async addNomad({ state }, body) {
        const response = await this.$axios.$post(
            `nomad/_doc`,body
          );  
    },
    async searchData({ commit,state }, searchValue) {
        const res = await this.$axios.get(`_search?q=${searchValue}&pretty=true`)
        commit("SEARCH_DATA", res.data);
        console.log(res.data)
    },
    async addAppt({ state }, body) {
      const response = await this.$axios.$post(
          `appt3/_doc`,body
        );  
  },
    async uploadFile({ state }, body) {
      const response = await this.$axios.$post(
          `files/_doc`,body
        );  
  },
    
}

export const mutations = {
    SEARCH_DATA(state,payload) {
      state.search_results=payload.hits.hits;
  
    }
  };