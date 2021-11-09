<template>
   <v-footer padless color="white" class="pb-2">
   <v-row>
     <v-col class="ml-6"  cols="12">
      <v-row no-gutters class="hover_pointer_tp">
        <v-col cols="auto" class="grey--text" @click="show_terms">Terms & Conditions</v-col>
        <v-col cols="auto" align="center" class="mx-8"><v-divider vertical></v-divider></v-col>
        <v-col cols="auto" class="grey--text"
        
        
        ><a target="_blank" href="https://www.e-rockwell.com/privacy-policy/" class="grey--text" style="text-decoration:none">Privacy Policy</a></v-col>
      </v-row>
    </v-col>
  
   </v-row>
   <v-spacer></v-spacer>
     <v-col class="ml-4" align="end">
      <v-row no-gutters justify="end">
        <v-btn 
          depressed class="square-btn"
          color="white"
          href="https://www.e-rockwell.com" 
          target="_blank">
          <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-btn 
          depressed class="square-btn"
          color="white"
          href="https://www.fb.com/RockwellLandCorporation" 
          target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn 
          depressed class="square-btn"
          color="white"
          href="https://www.instagram.com/rockwelllifeph/" 
          target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <!-- <a href="https://www.instagram.com/rockwelllifeph/" target="_blank"><v-icon class="ml-2">mdi-instagram</v-icon></a> -->
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>