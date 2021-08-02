import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#384D48",
          lighterPrimary: "#ACAD94", // #E53935
          lighterPrimary2: "#9a9b85",
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
          complementary: "#E2E2E2", //"#6E7271",
          background: "#D8D4D5" 
          
        },
      },
    },
  })