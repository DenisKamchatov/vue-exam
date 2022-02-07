<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Создать пост</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Введите информацию</v-toolbar>
            <v-card-text>
          <v-container>
           <v-row
            v-for="(field, k, i) in fields" :key="i"
            >
              <v-col cols="12">
                <v-select
                  v-if="field.type=='select'"
                  :items="field.values"
                  :label="field.title"
                  v-model="enter[k]"
                  required
                ></v-select>
                <v-text-field
                  v-if="field.type=='string'"
                  :label="field.title"
                  v-model="enter[k]"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Закрыть</v-btn>
            </v-card-actions>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="createPost"
              >Создать</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios"; 

const createApi = () => {
  const api = axios.create({
    baseURL: `https://demo-api.vsdev.space/api/brom`,
    timeout: 50000,
    withCredentials: false
  });
  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    throw response;
  }

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

const apiAxios = createApi();


export default {
  name: "PostForm",
  data () {
    return {
      dialog: false,
      fields: null,
      refs: null,
      enter: {}
    }
  },
  methods: {
    async createPost() {
      this.dialog = false;

      const postData = new FormData();
      const data = {};

      data.type = this.enter.type
      data.city = this.enter.city
      data.address = this.enter.address
      data.phone = this.enter.phone
      data.price = this.enter.price

      for (const key in data) {
        postData.append(key, data[key])
      }

      apiAxios.post('/sales')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  async created() {
    const res = await fetch('https://demo-api.vsdev.space/api/brom/sales/form')
    const json = await res.json();
    this.fields = json.fields;
    this.refs = json.reference_fields;
  }
}
</script>

<style scoped>
  input, select {
    border: 1px solid black;
    margin: 5px 0 0 0;
    padding: 5px 10px;
  }
  input::placeholder {
    opacity: 0.5;
  }
  label:not(:first-of-type) {
    margin: 15px 0 0 0;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
</style>