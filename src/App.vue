<template>
  <v-app style='background-color:#D8D4D5;'>
    <v-app-bar
      app
      color="primary"
      dark
      elevate-on-scroll
    >
      <div class="d-flex align-center">
      

      <p class='script-name my-1'>Kevin Hockenjos</p>
      </div>

      <v-spacer></v-spacer>
 <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
 <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list
        nav

      >
        <v-list-item-group
          v-model="group"
          active-class="clickedClass"
        >
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="script text-h4 text-center">
            Kevin Hockenjos
          </v-list-item-title>
          <v-list-item-subtitle class='text-center'>
            Software Engineer
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon color="primary" size='1.75rem'>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main >
      <AboutMe/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
export default {
  name: 'App',

  components: {
    AboutMe, Footer
  },
computed:{
    theme(){
      return 'dark'
    }
  },
  data: () => ({
    drawer: false,
      group: null,
      items: [
        {title: 'About Me', icon: 'mdi-account-tie'},
        {title: 'Projects', icon: 'mdi-application'},
        {title: 'Resume', icon: 'mdi-file-account'},
        {title: 'Video Games', icon: 'mdi-gamepad-variant'},
      ]
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>

<style scoped>
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
</style>
