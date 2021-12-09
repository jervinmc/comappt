export const state = () => ({
    counter: 0,
    mobile_view: 1265,
    search_results:'',
    recommendedResults:'',
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
    async recommendedItemData({ commit,state }, searchValue) {
      console.warn(searchValue)
      const res = await this.$axios.get(`_search?q=${searchValue}&pretty=true`)
      commit("RECOMMENDED_ITEMS", res.data);
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
  async updateTruncate({ commit,state }, body) {
    commit("setTruncate",body)
},
  
    
}

export const mutations = {
      RECOMMENDED_ITEMS(state,payload) {
        console.log(payload)
         state.recommendedResults=[]
        var data=[]
        payload.hits.hits.map(data => {
          
          state.recommendedResults.push(data._source.title)
        })
        
        
      },
    SEARCH_DATA(state,payload) {
      var searchData = []
      payload.hits.hits.map(data => {
        data['isTruncate']=true
        searchData.push(data)
      })
      state.search_results=searchData
  
    },
    setTruncate(state,payload) {
      state.search_results[payload].isTruncate=false
  
    }
  };