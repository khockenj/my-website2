<template>
 <v-app style='background-color:#D8D4D5;'>
    <Navbar />
    <v-main>
      <v-responsive>
    <router-view></router-view>
      </v-responsive>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import Navbar from './components/Navbar';
export default {
  name: 'App',

  components: {
    Footer, Navbar
  },
computed:{
    theme(){
      return 'dark'
    }
  },
  
};
</script>
<!--{title: 'Projects', icon: 'mdi-application', to: '/projects'},-->
<!--{title: 'Video Games', icon: 'mdi-gamepad-variant', to: '/videogames'},-->
<style>
.script-name {
font-family: 'Dancing Script', cursive;
font-size:2.25rem;
}
.script {
  font-family: 'Dancing Script', cursive !important;
}
.clickedClass {
  background-color: #9a9b85;
}
html,body{
    overflow-x: hidden;
}
</style>
