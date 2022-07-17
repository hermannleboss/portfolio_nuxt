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

import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"

export default {
  name: "SandboxPage",
  data() {
    return {
      mountains: [],
      realisations: []
    };
  }, methods: {
    async writeToFirestore() {
      const ref = doc(db, "testCollection", "testDoc")
      const document = {
        text: "Firebase 9 rocks!",
      };
      try {
        await setDoc(ref, document)
        alert("Success!")
      } catch (e) {
        alert("Error!")
        console.error(e)
      }
    },
  },
};
</script>
