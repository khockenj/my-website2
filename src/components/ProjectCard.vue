<template>
  <v-card
    class="mx-auto"
    min-width="18rem"
    color="lighterPrimary"
    shaped
    
  >
    <v-card-text>
     <!--<div>    <v-chip
      class="mx-2"
      color="primary"
      label
      text-color="white"
      x-small
      v-for="t in tags"
      :key=t
    >
      <v-icon left>
        mdi-label
      </v-icon>
      {{t}}
    </v-chip></div>-->
      <p class="text-h5 text--primary">
        {{pname}}
      </p>
       <p><v-icon color="primary" class='mx-0' v-for="i in icons" :key=i>{{ 'mdi-' + i }}</v-icon></p>
       
      <div class="text--primary">
        {{desc}}
      </div>
    </v-card-text>
     
    <v-card-actions>
      <v-btn
        text
        color="primary"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
    min-width="18rem"
    color="lighterPrimary2"
    shaped
      >
        <v-card-text class="pb-0">
          <p class="text-h5 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="primary"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: ['pname', 'desc', 'icons', 'tags'], 
    data: () => ({
      reveal: false,
    }),
  }
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>