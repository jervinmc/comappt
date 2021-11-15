<template>
  <div>
  <v-snackbar
        top
        absolute
        bottom
        color="error"
        outlined
        centered
        v-model="snackbar"

      >
        Wrong Credentials
        <template v-slot:action="{ attrs }">
          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    <div class="pb-4"> 
      <v-img class="" src="./comapp.png"></v-img>
      </div>
      <v-card width="450" class="rounded-lg py-5" elevation="10">
        <div class="pa-5">
            <v-img src="./logo.jpeg" height="60" width="60" />
            <div class="pb-10 pt-10 primary--text" style="font-size:17px" align="start"><b>Sign in to your Comission of Appointment Engine</b></div>
            <v-row>
                <v-col>
                    <div align="start" class="primary--text"><b>Username</b></div>
                    <v-text-field
                    @keyup-enter="login"
                    v-model="email"
                    outlined
                    dense
                    ></v-text-field>
                    <div align="start" class="primary--text"><b>Password</b></div>
                    <v-text-field
                    @keyup-enter="login"
                    type="password"
                    v-model="password"
                    outlined
                    dense
                    ></v-text-field>
                    <div class="pt-5">
                      <v-btn @click="login" x-large color="primary" width="200" dark outlined height="40">
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
      snackbar:false,
      email:null,
      password:null
    }
  },
  methods:{
   async login(){
      var credentials ={
        email:this.email,
        password:this.password
      }
      try {
        const response = await this.$axios.post('',credentials,{baseURL:`http://localhost:5000/api/v1/login`,'headers':{
            }})
            if(response.data.status=='success'){
              localStorage.setItem('token',response.data.token)
              window.location.href='/engine'
            }
            else {
                console.warn(response)
                this.snackbar=true
            }
      } catch (error) {
          this.snackbar=true
      }
      
    },
  }


}
</script>

<style>

</style>