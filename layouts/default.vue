<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="deep-purple"
    >
      <v-btn icon
             class="d-flex d-sm-none"
             @click="$router.go(-1)"
             v-if="$route.name !== 'getstarted'"
             aria-label="Go to back"
      >
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fill-height>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        data() {
            return {
                fixed: false,
                title: 'Vuetify.js'
            }
        }
    }
</script>
