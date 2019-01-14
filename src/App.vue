<template>
  <v-app dark>
    <div v-if="loader">
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <app-admin-log-in></app-admin-log-in>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-else>
      <app-home></app-home>
    </div>
  </v-app>
</template>

<script>
import AdminLogIn from '@/components/admin-login/AdminLogIn.vue'
import Home from '@/components/after-login/home/Home.vue'

export default {
  components: {
    appAdminLogIn: AdminLogIn,
    appHome: Home
  },
  computed: {
    loader () {
      return this.$store.getters.loader
    }
  }
}
</script>

<style>
</style>
