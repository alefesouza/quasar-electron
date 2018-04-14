<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn flat round dense icon="arrow_back" v-if="$route.path !== '/'" @click="$router.push('/')" />

        <q-toolbar-title>
          VueJS SP
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <transition
        appear
        leave-active-class="animated fadeOut"
        :duration="300"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'LayoutDefault',
  methods: {
    openURL,
  },
};
</script>
