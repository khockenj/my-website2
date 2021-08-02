<template>
<v-responsive>
  <v-container style='max-width:55%' class='my-15'>
    <v-row>
      <v-col v-for="p in projects" :key="p.name">
    <ProjectCard :pname=p.name :desc=p.desc :icons=p.icons :tags=p.tags />
    </v-col>
    </v-row>
  </v-container>
  </v-responsive>
</template>

<script>
  import ProjectCard from '../components/ProjectCard';
  export default {
    name: 'HelloWorld',
  components: {
    ProjectCard
  },
    data: () => ({
      projects: [
        {name: "League of Mentoring", desc: "This was a really cool project that I worked really hard on to impress you.", icons: ['language-html5', 'vue-js', 'language-python', 'language-css3'], tags: ['Web Design']},
        {name: "Data Visualizations", desc: "This was a really cool project that I worked really hard on to impress you.", icons: ['language-html5', 'vue-js', 'language-python'], tags:['Data Analysis', 'Geography']},
        {name: "GEDCOM Family Parser", desc: "This was a really cool project that I worked really hard on to impress you.", icons: ['language-html5', 'vue-js', 'language-python', 'language-css3']},
        {name: "Requirements Document", desc: "This was a really cool project that I worked really hard on to impress you.", icons: ['language-html5', 'vue-js', 'language-python']},
        {name: "Project 1", desc: "This was a really cool project that I worked really hard on to impress you.", icons: ['language-html5', 'vue-js', 'language-python', 'language-css3']},
        {name: "Project 2", desc: "This was a really cool project that I worked really hard on to impress you.", icons: ['language-html5', 'vue-js', 'language-python']}
      ]
    }),
  }
</script>


