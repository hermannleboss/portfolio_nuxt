<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li>dss</li>
        <li>ds</li>
        <li>qs</li>
        <li>fs</li>
        <li>sq</li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>
<script>

import "firebase/firestore";

export default {
  name: "SandboxPage",
  data() {
    return {
      mountains: [],
      realisations: []
    };
  },
  firestore: {
    realisations: "dss"
  },
  async fetch() {
    try {
      this.realisations = await this.$fire.firestore.collection("realisation").get().then(querySnapshot => {
        this.mountains = querySnapshot.docs.map(doc => doc.data())

        // do something with documents
      });
      // console.log("la variable ", varrialbe);
    } catch (e) {
      // handleError(e);
      console.log(e);
    }
  }
};
</script>
