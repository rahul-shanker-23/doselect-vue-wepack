<template>
  <div class="about">
    <h2>About Page</h2>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { APIURL } from "../API_URL";
import { ref, onMounted } from "vue";

const data = ref("");
onMounted(async () => {
  try {
    const res = await axios.get(`${APIURL}dummyData`);
    data.value = res.data[1].data;
  } catch {
    data.value = "cannot call api, run command: npm run server";
  }
});
</script>
