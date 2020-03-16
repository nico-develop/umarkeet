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
      <div class="text-center">
        <v-avatar color="orange" size="62">
          <span class="white--text headline">62</span>
        </v-avatar>
        <p>Choose your connection option:</p>

        <div class="my-2">
          <v-btn large color="primary">
            Facebook connect
          </v-btn>
        </div>

        <div class="my-2">
          <v-btn large color="error" to="/auth/register">
            By email
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: { }
}
</script>
