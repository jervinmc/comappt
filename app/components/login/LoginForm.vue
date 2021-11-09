<template>
  <div>
    <div class="pb-4"> 
      <v-img class="" src="./comapp.png"></v-img>
      </div>
      <v-card width="400" class="rounded-lg py-10" elevation="5">
        <div class="pa-5">
            <div class="pb-5" style="font-size:25px" align="center">Login</div>
            <v-row>
                <v-col>
                    <div align="start"><b>Username</b></div>
                    <v-text-field
                    outlined
                    dense
                    ></v-text-field>
                    <div align="start"><b>Password</b></div>
                    <v-text-field
                    outlined
                    dense
                    ></v-text-field>
                    <div class="pt-5">
                      <v-btn @click="login" x-large color="primary" width="200" dark height="40">
                          Sign In
                    </v-btn>
                    </div>
                </v-col>
            </v-row>
        </div>
      </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    login(){
      //conditions awaiting and fetching from the credentials.
      this.$router.push('/engine')      
    },
  }


}
</script>

<style>

</style>