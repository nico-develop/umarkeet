<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-btn text to="/" nuxt> Home </v-btn>
      <v-btn text to="/getstarted" nuxt> Get Started </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: { }
}
</script>
