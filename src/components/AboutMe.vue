<template>
<v-container>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color2"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h5">
          {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary text-h6">
          <p class='pt-2'><ul><li v-for='d in item.desc' :key='d'>{{d}}</li></ul></p>
         
        </v-card-text>
      </v-card>
        <template v-slot:opposite>

      <span class='text-h5'>{{item.year}}</span>
      </template>
    </v-timeline-item>
  </v-timeline>
  </v-container>
</template>

<script>
export default {
    name: 'AboutMe',
    data: () => ({
      items: [
        {
          color: 'lighterPrimary2',
          color2: "primary",
          icon: 'mdi-code-tags',
          year: 'Software Configuration Specialist II',
          title: "MeridianLink",
          desc: ["Configured and designed loan origination software using Javascript, HTML5, CSS3, and Angular to fulfill client needs", "Utilized Salesforce and Jira to track client requests and manage projects and work", "Managed an enterprise level client on an interim basis, communicating daily with the client about requirements and progress"]
        },
        {
          color: 'lighterPrimary2',
                    color2: "primary",
          icon: 'mdi-code-tags',
          year: 'June 2019',
          title: "Teledata Communications",
          desc: ["Customized loan origination software using Javascript and Angular to meet client standards and specifications", "Developed automation scripts in Python using Selenium that sped up the basic onboarding process by over 50%", "Utilized VersionOne and Bridge360 to manage projects and client requests and to respond to client concerns directly"]
        },
        {
          color: 'lighterPrimary2',
                    color2: "primary",
          icon: 'mdi-school',
          year: 'May 2019',
          title: "Stevens Institute of Technology",
          desc: ["Graduated from Stevens Institute of Technology with a Bachelor's of Engineering in Software Engineering"]
        },
        {
          color: 'lighterPrimary2',
                    color2: "primary",
          icon: 'mdi-head-cog-outline',
          year: 'September 2018',
          title: "Stevens Institute of Technology",
          desc: ['Assisted professors in the development of the course on software maintenance, testing, and quality assurance', 'Instructed students on different testing topics such as: Configuration Management, Unit Testing, Integration Testing, System Testing, Usability Testing, Security Testing and Performance Testing', 'Assessed students using a variety of methods and techniques to provide effective and timely feedback to students to support their learning']
        },
      ],
    }),
}
</script>