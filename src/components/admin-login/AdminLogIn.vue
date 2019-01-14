<template>
  <v-container class="mt-5">
    <v-layout row>
      <v-flex
        xs12
        sm8
        md8
        offset-sm2
        offset-md2
      >
        <v-card
          class="mt-5"
          :img="dashImage"
          style="opacity: 0.9;"
        >
          <v-container>
            <v-layout
              row
              class="mb-4"
            >
              <v-flex xs12>
                <v-text class="text-xs-center">
                  <v-icon style="position: absolute; left: 27%; top: 12%;">fas fa-cogs</v-icon>
                  <h2 class="display-2">
                    Admin Panel
                  </h2>
                </v-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout
              row
              wrap
              class="mt-4 mb-4"
            >
              <v-flex xs12>
                <v-form
                  ref="form"
                  lazy-validation
                  v-model="valid"
                >
                  <v-text-field
                    label="Email Address"
                    v-model="email"
                    type="email"
                    color="black--text"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'visibility_off' : 'visibility'"
                    v-model="password"
                    @click:append="show = !show"
                    color="black--text"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout
              row
              wrap
              class="mt-4"
            >
              <v-flex
                xs12
                offset-sm5
                offset-md5
              >
                <v-btn
                  round
                  @click="navigateToAfterLogin"
                >submit</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    usersLog: [],
    valid: true,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length > 1 || 'Password must be greater than 1'
    ],
    roling: [],
    dashImage: 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }),
  created () {
    for (let i = 0; i < this.users.length; i++) {
      this.usersLog.push(this.users[i])
    }
    console.log(this.usersLog)
    for (let i = 0; i < this.roles.length; i++) {
      this.roling.push(this.roles[i].name)
    }
    console.log(this.roling)
  },
  computed: {
    users () {
      return this.$store.getters.users
    },
    roles () {
      return this.$store.getters.roles
    }
  },
  methods: {
    navigateToAfterLogin () {
      for (let i = 0; i < this.usersLog.length; i++) {
        if (this.usersLog[i].userEmail === this.email) {
          if (this.usersLog[i].userPassword === this.password) {
            for (let k = 0; k < this.roling.length; k++) {
              if (this.roling[k] === this.usersLog[i].userRoles) {
                if (this.$refs.form.validate()) {
                  this.$store.commit('setLoader', false)
                  this.$store.commit('setUserEmail', this.email)
                  this.$store.commit('setDeleteIcon', this.roling[k])
                }
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
</style>
