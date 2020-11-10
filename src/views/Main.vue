<template>
  <main class="main">
    <section class="flex two">
      <h2>Main</h2>
      <button @click="getItem">Click</button>
      <div>{{item}}</div>
    </section>
  </main>
</template>
<script>
import baseService from '../services/base.service';

var axiosStandardCatch = function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    throw error;
  }
};

export default {
  name: "Main",
  data() {return {
    item: undefined,
  }},
  components: {},
  methods: {
    getItem() {
      baseService.item.show().then(response => {
        this.item = response.data
      }).catch(axiosStandardCatch);
    }
  },
};
</script>
<style scoped>
</style>