<template>
    <v-container>
        <!-- <app-bar/> -->
        <v-sheet class="d-flex justify-center align-center">
        <div style="width:900px">
        <content-page @search="searchExecute" />
        <search-results :data="data" :search_value="search_value" @search="searchAgain" v-if="isSearched" />
        </div>
        </v-sheet>
    </v-container>
</template>

<script>
import AppBar from '../../components/engine/AppBar.vue'
import ContentPage from '../../components/engine/ContentPage.vue'
import SearchResults from '../../components/engine/SearchResults.vue'
export default {
    components:{
        ContentPage,
        AppBar,
        SearchResults
    },
    data(){
        return{
            isSearched:false,
            data:[],
            search_value:''
        }
    },
    methods:{
        searchAgain(){
            this.isSearched=false
            this.data=[]
            this.search_value=''
        },
        searchExecute(val){
            this.search_value=val
            this.isSearched=true
        },
    },
}
</script>

<style>

</style>
ContentPage