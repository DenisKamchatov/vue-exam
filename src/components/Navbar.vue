<template>
  <v-container fluid>
    <v-app-bar color="orange accent-4" dark>
      <router-link to="/"> BROM </router-link>
      <router-link to="/">
        <v-btn outlined class="ml-10">Главная</v-btn>
      </router-link>
      <router-link to="/about-us">
        <v-btn outlined class="ml-4">О нас</v-btn>
      </router-link>
      <router-link to="/board">
        <v-btn outlined class="ml-4">Доска объявлений</v-btn>
      </router-link>
      <h3 class="ml-5">Камчатов Денис Сергеевич, группа 201-321</h3>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>