<template>
<v-responsive>
  <v-container style='max-width:80%' class='my-5'>
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
    name: 'Projects',
  components: {
    ProjectCard
  },
    data: () => ({
      projects: [
        {name: "League of Mentoring", desc: "Created a full stack web application that connected League of Legends players with coaches and eased the process of searching for and scheduling coaching sessions", icons: ['language-javascript', 'language-python', 'language-html5',  'language-css3'], tags: ['Web Design']},
        {name: "Data Visualizations", desc: "Created visualizations of New York State’s population changes per ZIP code over a 20 year span using shapefiles from Data.gov using Python, pandas, GeoPandas and Matplotlib", icons: ['language-python'], tags:['Data Analysis', 'Geography']},
        {name: "GEDCOM Family Parser", desc: "Worked in Agile teams to develop a GEDCOM Family parser that takes presents raw GEDCOM data in a human readable format. We created automated tests with over 95% having to pass", icons: ['language-python']},
        {name: "Requirements Document", desc: "Wrote a ConOps Document for a student apartment finder mobile system which was peer reviewed and critiqued. We interviewed users to develop use cases with dialog maps", icons: ['xml']},
        {name: "My Website", desc: "This is the website you're on now! I made this using Vue and node.js along with standard Javascript, HTML and CSS. I chose a Material Design Framework in Vuetify to create the look.", icons: ['language-javascript', 'language-html5', 'vue-js', 'language-css3']},
     
      ]
    }),
  }
</script>


