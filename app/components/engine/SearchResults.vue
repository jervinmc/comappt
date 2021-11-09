<template>
  <div>
        <!--<div class="pb-4"> 
            <v-img class="" src="./comapp.png"></v-img>
        </div>-->
        <div class="text-h5 pb-10">Search results found matches: <b>{{search_value}}</b><v-icon @click="search" class="pl-5">mdi-magnify</v-icon></div>
        <div v-for="key,index in search_results" :key="index">
            <div class="text-h6">{{search_results[index]._source.title}}</div>
            <div>{{search_results[index]._source.subtitle}}</div>
             <div class="pb-5"/>
             <div><a :href="search_results[index]._source.image">Download File</a></div>
            <v-divider></v-divider> 
        </div> 
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
props:['data','search_value'],
computed:{
    ...mapState(['search_results']),
    // dataResults(){
    //     return this.search_results.hits.hits
    // }
},
data(){
        return{
        }
    },
methods:{
    search(){
        this.$emit('search')
    }
}
}
</script>

<style>

</style>