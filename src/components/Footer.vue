<template>
  <v-footer
    dark
    padless
  >
  
    <v-card
      flat
      tile
      color="primary"
      dark
      class="text-center"
      min-width='100%'
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          color="background"
          icon
          :href="icon.url"
        >
          <v-icon large color="background">
            {{ 'mdi-' + icon.name }}
          </v-icon>
        </v-btn>
         <v-tooltip
          v-model="show"
          right
          color="lighterPrimary2"
        >
        <template v-slot:activator="{ }">
            <v-btn
              icon 
              class="mx-3"
            color="background"
              @click="() => {copyEmail(); show = !show; setTimeout(function(){show = !show;}, 3000)}"
            >
              <v-icon color="background" large>
                mdi-email
              </v-icon>
            </v-btn>
          </template>
          <span>Email copied to clipboard</span>
        </v-tooltip>
      </v-card-text>



      <!--<v-divider></v-divider>

      <v-card-text color="background">
        {{ new Date().getFullYear() }} — <strong>Kevin Hockenjos</strong>
      </v-card-text>-->
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      copyEmail: () => {
        var email = document.createElement("input");
        email.value = "khockenj@gmail.com";
        document.body.appendChild(email);
        email.select();
        email.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        document.body.removeChild(email);
      },
      setTimeout(f, time) {
        window.setTimeout(f, time);
      }
    },
      data: () => ({
      show: false,
      icons: [
        {name: 'github', url: 'https://github.com/khockenj'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/kevin-hockenjos-264371107/'},
        {name: 'file-account', url:'https://drive.google.com/file/d/1Wxca0DxutLRAWSDXOPhp7D2B1HytLYEv/view?usp=sharing'}
      ],
    }),
  }
</script>