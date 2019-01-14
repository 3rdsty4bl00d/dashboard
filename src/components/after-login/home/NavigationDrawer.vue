<template>
  <v-navigation-drawer
    permanent
    fixed
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Dashboard
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list
      dense
      class="pt-0"
    >
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        light
        active-class="white--text"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>{{ log.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-btn
            @click="navigateToback"
            flat
          >
            {{ log.title }}
          </v-btn>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'DashBoard', icon: 'dashboard', to: '/dashboard' },
        { title: 'Users', icon: 'supervisor_account', to: '/users' },
        { title: 'Roles', icon: 'compare_arrows', to: '/roles' },
        { title: 'Music', icon: 'fas fa-music', to: '/music' },
        { title: 'Payment', icon: 'fas fa-credit-card', to: '/payment' }
      ],
      log: {
        title: 'Log Out',
        icon: 'fas fa-sign-out-alt'
      },
      right: null
    }
  },
  methods: {
    navigateToback () {
      this.$store.commit('setLoader', true)
    }
  }
}
</script>

<style scoped>
</style>
