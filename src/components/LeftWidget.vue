<template>
  <div class="widget col-4">
    <img src="./../assets/img/left_widget_img.jpg" alt="">
    <p class="text-center font-weight-bold">
      Наша база ежедневно пополняется десятками самых хороших объявлений по лучшей
      цене
    </p>
    <p>Автомобили: {{ info.cars }}</p>
    <p>Квартиры: {{ info.apartments }}</p>
  </div>
</template>



<script>
export default {
  name: "LeftWidget",
  data: () => ({
    info: []
  }),
  async mounted() {
    const res = await fetch('https://demo-api.vsdev.space/api/brom/left_widget')
    const info = await res.json()
    this.info = info
  }
};
</script>

<style scoped>
.widget {
  border: 1px solid #444444;
  border-radius: 10px;
  max-height: 400px;
}
</style>
