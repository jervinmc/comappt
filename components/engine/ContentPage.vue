<template>
  <div>
    <div class="pb-4">
      <v-img class="" src="./comapp.png"></v-img>
    </div>
    <div class="grey--text">Search Engine</div>
     <v-menu offset-y v-model="menu">
        <template v-slot:activator="{ on, attrs }">
    <v-text-field
    @keydown="recommendationItems(searchValue)"
    hide-details=""
      v-model="searchValue"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      solo
      v-bind="attrs"
      v-on="on"
      v-on:keyup.enter="search"
    ></v-text-field>
    </template>
        <v-list class="pt-0">
          <v-list-item
            style="cursor:pointer;"
            @click="searchRecommended(recommendedResults[index])"
            v-for="(item, index) in recommendedResults"
            :key="index"
          >
            <v-list-item-title >{{recommendedResults[index]}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["recommendedResults"]),
  },
  data() {
    return {
      recommendedItems:['Yasay','Cynthia Villar is one of the','Bong go is one of the','Juan Dela Cruz'],
      searchValue: "",
    };
  },
  methods: {
    async recommendationItems(val){
      this.menu=true
      if (val == "") return;
      try {
        this.$emit("search", val);
        await this.$store.dispatch("recommendedItemData", val);
      } catch (error) {
      }
    },
    async searchRecommended(val){
      if (val == "") return;

      try {
        this.$emit("search", val);
        await this.$store.dispatch("searchData", val);
      } catch (error) {
        alert(error);
      }
    },
    async search() {
      if (this.searchValue == "") return;

      try {
        this.$emit("search", this.searchValue);
        await this.$store.dispatch("searchData", this.searchValue);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
</style>