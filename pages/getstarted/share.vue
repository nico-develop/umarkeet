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
        <p class="text-center">
          Click on the link below to share it
        </p>
        <v-text-field
          id="link"
          v-model="link"
          label="Share link"
          append-icon="mdi-content-copy"
          @click:append="copy"
          required
        >
        </v-text-field>
      </v-form>
      <p class="text-center">
        Or share it directly on a social network
      </p>
      <social-sharing :url="link"
                      inline-template>
        <div>
          <network network="facebook">
            <v-btn aria-label="Share on Facebook" class="mx-2" fab>
              <v-icon>fab fa-facebook-square</v-icon>
            </v-btn>
          </network>

          <network network="twitter">
            <v-btn aria-label="Share on Twitter" class="mx-2" fab>
              <v-icon>fab fa-twitter-square</v-icon>
            </v-btn>
          </network>

          <network network="linkedin">
            <v-btn aria-label="Share on Linkedin" class="mx-2" fab>
              <v-icon>fab fa-linkedin</v-icon>
            </v-btn>
          </network>

          <network network="pinterest">
            <v-btn aria-label="Share on Pinterest" class="mx-2" fab>
              <v-icon>fab fa-pinterest</v-icon>
            </v-btn>
          </network>
        </div>
      </social-sharing>

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

      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
      >
        Copied!
        <v-btn
          color="blue"
          text
          @click="snackbar = false"
          aria-label="Go to back"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-flex>
  </v-layout>
</template>

<script>
    function randStr(length) {
        const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let randStr = '';
        const max = str.length - 1;
        for (let i = 0; i < length; ++i) {
            randStr += str[Math.floor(Math.random() * max) + 1];
        }
        return randStr;
    }

    export default {
        data() {
            return {
                link: `${process.env.BASE_URL}/${randStr(4)}`,
                snackbar: false,
                timeout: 1000
            }
        },
        methods: {
            copy() {
                navigator.clipboard.writeText(this.link);
                this.snackbar = true
            }
        }
    }
</script>
