<template>
  <div>
    <h2>Home Page</h2>
    <h3>{{ data }}</h3>
  </div>
</template>

<script setup>
import axios from "axios";
import { APIURL } from "../API_URL";
import { ref, onMounted } from "vue";

const data = ref("");
onMounted(async () => {
  const res = await axios.get(`${APIURL}dummyData`);
  data.value = res.data[0].data;
});
</script>
