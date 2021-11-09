<template>
  <v-app-bar
        app
        absolute
        color="#0b7392"
        dark
        height="60"
        shrink-on-scroll
        scroll-target="#scrolling-techniques-2"
      >
        <v-app-bar-nav-icon @click="openDrawer" ></v-app-bar-nav-icon>
   
        <v-spacer></v-spacer>
        <v-btn icon @click="pushRoute" plain>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
</template>

<script>
export default {
  props:['app_name'],
  data(){
    return{
     drawer:false
  }},
  methods:{
    pushRoute(){
      window.location.href="/engine"
    },
    openDrawer(){
      this.$emit("openDrawer")
    },
  }
}
</script>

<style>

</style>