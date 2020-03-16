<template>
  <v-layout
    align-center
  >
    <v-flex>
      <v-card>
        <v-card-title>
          <v-avatar color="grey" size="30" class="mr-3">
            <v-icon
              v-show="!image"
              size="15"
            >fas fa-user fa-xs
            </v-icon>
            <img
              v-show="image"
              :src="image"
            >
          </v-avatar>
          <span class="headline"> {{ name }}</span>
          <v-btn @click="dialog = true"
                 absolute
                 class="mt-8"
                 fab
                 icon
                 right
                 top>
            <v-icon>fas fa-cog</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <p>{{ contentCTA }}</p>

                <v-text-field :label="labelEmail" required></v-text-field>

                <v-btn color="error" large>{{ btn }}</v-btn>
              </v-col>
            </v-row>
            <small>*indicates required field</small>
          </v-container>
        </v-card-text>
      </v-card>

      <v-btn @click="$router.go(-1)"
             absolute
             bottom
             class="my-10 d-none d-sm-flex"
             color="indigo"
             dark
             fab
             left>
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>

      <v-btn absolute
             bottom
             class="my-10"
             color="indigo"
             dark
             fab
             right
             to="/getstarted/link"
      >
        <v-icon>fas fa-arrow-right</v-icon>
      </v-btn>

      <v-dialog max-width="600px" persistent v-model="dialog">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field :value="contentCTA" @input="updateContentCTA" label="Content for call to action" required></v-text-field>
                  <v-text-field :value="labelEmail" @input="updateLabelEmail" label="Email label" required></v-text-field>
                  <v-text-field :value="btn" @input="updateBtn" label="Button label" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="dialog = false"
              color="blue darken-1"
              text
            >Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-flex>
  </v-layout>
</template>

<script>
    import {mapGetters,mapState,mapMutations} from 'vuex'

    export default {
        data() {
            return {
                dialog: false,
            }
        },
        computed: {
            ...mapGetters({
                image: 'branding/getImage',
                name: 'branding/getName',
                contentCTA: 'popin/getContentCTA',
                labelEmail: 'popin/getLabelEmail',
                btn: 'popin/getBtn',
            })
        },
        methods: {
            updateContentCTA(e) {
                this.$store.commit('popin/setContentCTA', e)
            },
            updateLabelEmail(e) {
                this.$store.commit('popin/setLabelEmail', e)
            },
            updateBtn(e) {
                this.$store.commit('popin/setBtn', e)
            }
        }
    }
</script>
