<template>
  <v-layout
    align-center
  >
    <v-flex>
      <v-form
        ref="form"
      >
        <div class="text-center">
          <v-avatar
            id="avatar"
            @mouseenter="over = true"
            @mouseleave="over = false"
            @click="$refs.inputUpload.click()"
            color="grey"
            size="100"
          >
            <v-icon v-show="!over && !image">fas fa-user</v-icon>
            <v-icon v-show="over && !image">fas fa-camera</v-icon>
            <img
              v-show="image"
              :src="image"
            >
          </v-avatar>
        </div>

        <input ref="inputUpload" type="file" v-show="false" @change="uploadedFile"/>

        <v-text-field
          :value="name"
          label="Your branding name"
          required
        ></v-text-field>
      </v-form>

      <v-btn absolute
             bottom
             class="my-10"
             color="indigo"
             dark
             fab
             right
             to="/getstarted/popin"
      >
        <v-icon>fas fa-arrow-right</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                over: false
            }
        },
        computed: {
            ...mapGetters({
                image: 'branding/getImage',
                nameStore: 'branding/getName',
            }),
            name: {
                get() {
                    return this.nameStore
                },
                set(name) {
                    this.$store.commit('branding/setName', name)

                    return name
                }
            }
        },
        methods: {
            uploadedFile(data) {
                const localImg = new Promise((resolve, reject) => {
                    const localImage = new FileReader();

                    localImage.addEventListener('load', e => {
                        resolve(e.target.result)
                    });

                    if (data.target.files.length) {
                        localImage.readAsDataURL(data.target.files[0]);
                    } else {
                        reject(false)
                    }
                });

                localImg.then(result => this.$store.commit('branding/setImage', result));
            }
        }
    }
</script>

<style lang="scss">
  #avatar:hover {
    cursor: pointer;
  }
</style>
