<template>
  <v-dialog
        persistent
        v-model="isViewLogout"
        width="500"
      >
        <v-card class="pa-2">
          <v-card-title>
            <v-row>
              <v-col align="center">
                <span class="headline"><b class="avenir-black text-blue">Logout of Comappt</b></span>
              </v-col>
            </v-row>
          </v-card-title>
          <v-container class="pa-5">
            <v-row justify="center" no-gutters class="mb-8">
              <v-col cols="auto" class="pt-2 mr-4 avenir">
                <span class="text-blue">Are you sure you want to logout ?</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col  class="action-buttons d-flex column-flex justify-center">
                <v-btn
               color="#344557"
                rounded depressed outlined width="150"
                @click="cancel"
                id="f-capital-nd"
                    class="rounded-lg mr-8"
                >
                  Cancel
                </v-btn>
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-btn :elevation="hover ? 0 : 3"
                    style="color:white"
                    width="160" height="40" rounded depressed dark color="primary"  
                    :loading=isLoaded
                    id="f-capital"
                    class="rounded-lg"
                    
                    @click="logoutUser">
                      Logout
                    </v-btn>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    props:['isViewLogout'],
    methods:{
        logoutUser(){
            this.isLoaded=true
            localStorage.removeItem('token')
            window.location.href='/'
            this.isLoaded=false
        },
        cancel(){
            this.$emit('cancel')
        },
    },
    data(){return{
        isLoaded:false,
    }}
}
</script>

<style>

</style>