<template>
  <v-container d-flex fluid>
    <LeftWidget />
    <div class="col-8">
      <h1 class="text-center">О нас</h1>
      <p>{{ text.text }}</p>
    </div>
  </v-container>
</template>

<script>
import LeftWidget from "../components/LeftWidget";
export default {
  name: "AboutUsPage",
  components: {LeftWidget},
  data: () => ({
    text: ''
  }),
  async mounted() {
    const res = await fetch('https://demo-api.vsdev.space/api/brom/about_page')
    const text = await res.json()
    this.text = text
  }
};
</script>

<style scoped>
</style>