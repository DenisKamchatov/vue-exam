<template>
  <v-container d-flex fluid>
    <LeftWidget />
      <PostForm />
    <div class="ml-7">
      <v-container fluid d-flex flex-wrap justify-center>
        <v-card class="mt-5 col-3 mx-2" v-for="post in posts" :key="post.id">
          <v-card-text>Тип: {{ post.type }}</v-card-text>
          <v-card-text>Город: {{ post.city }}</v-card-text>
          <v-card-text>Адрес: {{ post.address }}</v-card-text>
          <v-card-text>Номер телефона: {{ post.phone }}</v-card-text>
          <v-card-text>Цена: {{ post.price }}</v-card-text>

          <v-card-text v-if="post.model">Модель: {{ post.model }}</v-card-text>
          <v-card-text v-if="post.car_type">Тип машины: {{ post.car_type }}</v-card-text>
          <v-card-text v-if="post.engine_volume">Объем двигателя: {{ post.engine_volume }}</v-card-text>
          <v-card-text v-if="post.engine_power">Лошадиные силы: {{ post.engine_power }}</v-card-text>

          <v-card-text v-if="post.rooms">Количество комнат: {{ post.rooms }}</v-card-text>
          <v-card-text v-if="post.square">Квадратные метры: {{ post.square }}</v-card-text>
        </v-card>
      </v-container>
    </div>

  </v-container>
</template>

<script>
import LeftWidget from "../components/LeftWidget";
import PostForm from "../components/PostForm";
export default {
  name: "BoardPage",
  components: {PostForm, LeftWidget},
  data: () => ({
    posts: [],
    countCars: '',
  }),
  async mounted() {
    fetch('https://demo-api.vsdev.space/api/brom/sales')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      this.posts = res;
      this.countCars = res.length
    });
  }
};
</script>

<style scoped>
</style>