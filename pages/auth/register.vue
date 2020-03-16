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

      <v-form
        ref="form"
        lazy-validation
      >
        <v-text-field
          label="E-mail"
          type="email"
          required
        ></v-text-field>

        <v-text-field
          label="Password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          required
        ></v-text-field>

          <v-btn large color="primary">
            Create an account
          </v-btn>
      </v-form>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data: () => {
        return {
            show1: false
        }
    },
  components: {

  }
}
</script>
