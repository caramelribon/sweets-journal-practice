<template>
  <div id="app">
    <app-header class="z-1"></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style></style>
