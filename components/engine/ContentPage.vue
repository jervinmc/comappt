<template>
  <div>
    <div class="pb-4">
      <v-img class="" src="./comapp.png"></v-img>
    </div>
    <div class="grey--text">Search Engine</div>
    <v-text-field
      v-model="searchValue"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      solo
      v-on:keyup.enter="search"
    ></v-text-field>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
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