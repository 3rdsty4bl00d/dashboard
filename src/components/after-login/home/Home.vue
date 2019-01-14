<template>
  <v-container>
    <v-layout row>
      <v-flex md3>
        <app-navigation-drawer></app-navigation-drawer>
      </v-flex>
      <v-flex md9>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <router-view></router-view>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue'
export default {
  components: {
    appNavigationDrawer: NavigationDrawer
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
    },
    enter (el, done) {
      el.style.duration = 1000
      el.style.opacity = 1
    }
  }
}
</script>

<style>
</style>
