<template>
<v-responsive>
  <v-container style='max-width:80%' class='my-0'>
    <v-row>
        <v-col cols='4'></v-col>
        <v-col cols='4'><v-img style='border:2px solid #384D48;' src='@/assets/me.jpg' contain></v-img></v-col>
        <v-col cols='4'></v-col>
    </v-row>
    <v-row><v-col class='text-h2 text-center script'>Kevin Hockenjos</v-col></v-row>
    <v-row><v-col class='text-h5 text-center mb-4'>Software Engineer</v-col></v-row>
    <Projects />
  </v-container>
  </v-responsive>
</template>

<script>
  import Projects from '../components/Projects';
  export default {
    name: 'Home',
    components: {Projects},
    data: () => ({}),
  }
</script>

<style scoped>
.script {
  font-family: 'Dancing Script', cursive !important;
}
</style>


