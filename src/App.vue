<template>
  <v-app style='background-color:#D8D4D5;'>
    <v-app-bar
      app
      color="primary"
      dark
      elevate-on-scroll
    >
      <div class="d-flex align-center">
      

      <router-link style='color:white;text-decoration:none;' class='script-name my-1' to='/'>Kevin Hockenjos</router-link>
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
          :to='item.to'
          :href='item.url'
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
    <v-main>
<router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer';
export default {
  name: 'App',

  components: {
    Footer
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
        {title: 'About Me', icon: 'mdi-account-tie', to: '/about'},
        {title: 'Projects', icon: 'mdi-application', to: '/projects'},
        {title: 'Resume', icon: 'mdi-file-account', url: 'https://drive.google.com/file/d/1Wxca0DxutLRAWSDXOPhp7D2B1HytLYEv/view?usp=sharing'},
        {title: 'Video Games', icon: 'mdi-gamepad-variant', to: '/videogames'},
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
