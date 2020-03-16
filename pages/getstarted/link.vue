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
        <p>
          Copie le lien que tu veux partager ici
        </p>
        <v-text-field
          v-model="link"
          label="Link"
          :append-icon="'mdi-content-paste'"
          @click:append="paste"
          required
        ></v-text-field>
      </v-form>

      <v-btn absolute
             bottom
             left
             class="my-10 d-none d-sm-flex"
             fab
             dark
             color="indigo"
             @click="$router.go(-1)">
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>

      <v-btn absolute
             bottom
             class="my-10"
             color="indigo"
             dark
             fab
             right
             to="/getstarted/share"
      >
        <v-icon>fas fa-arrow-right</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                link: null
            }
        },
        methods: {
            async paste() {
                const content = await navigator.clipboard.readText();

                this.link = content;
            }
        }
    }
</script>
