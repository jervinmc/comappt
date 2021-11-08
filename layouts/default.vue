<template>
  <v-app dark>
  <v-snackbar
      top
      v-model="snackbar.show"
      :timeout="8000"
      :color="snackbar.color"
    >
      <v-row no-gutters align="center">
        <v-col cols="2">
          <v-icon>mdi-{{ snackbar.icon }}</v-icon>
        </v-col>
        <v-col>
          <span>{{ snackbar.text }}</span>
        </v-col>
      </v-row>
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="closeSnackbar">Close</v-btn>
      </template>
    </v-snackbar>
    <app-bar @openDrawer="openDrawer" :app_name="route_name"/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <footer/>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
      <div class="logout" align="center" >
      <v-divider class="pb-2"/>
        <div class="white--text">
          Logout
        </div>
      </div>
        <v-list-item class="pa-0">
           <v-img :src="src">
           <div class="white--text">Jervin Macalawa</div>
           </v-img>
        </v-list-item>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="primary"
            color="white"
          >
            <v-list-item :to="items[index].to" v-for="(key,index) in items" :key="index">
              <v-icon class="pr-2">{{items[index].icon}}</v-icon>
              <v-list-item-title>{{items[index].title}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </v-app>
</template>

<script>
import AppBar from '../components/engine/AppBar.vue'
import Footer from '../components/general/Footer.vue'
import { mapState, mapActions } from "vuex";
export default {
  components: { Footer, AppBar },
  computed:{
    ...mapState("snackbar", ["snackbar", "loading_overlay"]),
  },
  data () {
    return {
      drawer:false,
      route_name:this.$route.name,
      clipped: false,
      drawer: false,
      fixed: false,
      src:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      items: [
        {
          icon: 'mdi-magnify',
          title: 'Engine',
          to: '/engine'
        },
        {
          icon: 'mdi-apps',
          title: 'Nomad',
          to: '/nomad'
        },
        {
          icon: 'mdi-notebook',
          title: 'Appointment',
          to: '/appt3'
        },
        {
          icon: 'mdi-upload',
          title: 'Upload File',
          to: '/upload'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods:{
    ...mapActions("snackbar", ["closeSnackbar"]),
    openDrawer(){
      this.drawer =!this.drawer
    },
  },
    created(){
      
    }
  
}
</script>
<style>
.logout{
padding:20px 0px;
position:absolute;
bottom:0px;
width:100%;
background-color:#0b7392;
opacity:0.9
}
.logout :hover{
cursor: pointer;
}
</style>
