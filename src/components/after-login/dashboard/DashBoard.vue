<template>
  <v-container>
    <v-layout
      row
      class="mt-5"
    >
      <v-flex
        xs12
        sm12
        md12
      >
        <v-card>
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-text class="text-xs-left">
                  <h2 class="headline">Dashboard</h2>
                </v-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout
              row
              class="mt-5 mb-4"
            >
              <v-flex xs12>
                <v-text class="text-xs-left">
                  <p>
                    {{ user }} has successfully logged in
                  </p>
                </v-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout
              row
              class="mt-3"
            >
              <v-flex xs12>
                <v-text class="text-xs-left">
                  <p>Your role as {{ articleFront }} {{ userRole }} is</p>
                  <p>you can</p>
                  <ul>
                    <li
                      v-for="(role, i) in rolesRole"
                      :key="i"
                    >
                      {{ role }}
                    </li>
                  </ul>
                </v-text>
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
    userRole: '',
    articleFront: '',
    rolesRole: []
  }),
  created () {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userEmail === this.user) {
        this.userRole = this.users[i].userRoles
      }
    }
    const article = this.userRole.slice(0, 1)
    if (article === 'a' || article === 'e' || article === 'i' || article === 'o' || article === 'u' || article === 'A' || article === 'E' || article === 'I' || article === 'O' || article === 'U') {
      this.articleFront = 'an'
    } else {
      this.articleFront = 'a'
    }
    for (let j = 0; j < this.roles.length; j++) {
      if (this.userRole === this.roles[j].name) {
        for (let i = 0; i < this.roles[j].role[i].length; i++) {
          this.rolesRole.push(this.roles[j].role[i])
        }
      }
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    },
    user () {
      return this.$store.getters.userEmail
    },
    roles () {
      return this.$store.getters.roles
    }
  }
}
</script>

<style>
</style>
