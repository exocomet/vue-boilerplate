<template>
  <div class="flex two">
    <aside>
      <router-link tag="button" :to="{name: 'main', query: {uid: null}}">Main</router-link>
      <router-link tag="button" :to="'/about'">About</router-link>
    </aside>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>
<script>
// import axios from 'axios';

export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>