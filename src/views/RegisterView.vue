<template>
  <div>
    <h2>Ro'yxatdan o'tish</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="name"
          >Ism:
          <input type="text" v-model="formData.name" required />
        </label>
      </div>
      <div>
        <label for="email"
          >Email:
          <input type="email" v-model="formData.email" required />
        </label>
      </div>
      <div>
        <label for="password"
          >Parol:
          <input type="password" v-model="formData.password" required />
        </label>
      </div>
      <button type="submit">Ro'yxatdan o'tish</button>
    </form>
    <div>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post(
          "https://f77a51255486f515.mokky.dev/register",
          this.formData
        );
        console.log("Ro'yhatdan o'tish muvaffaqiyatli:", response.data);
        this.$router.push("/login"); // Ro'yxatdan o'tgandan keyin login sahifasiga o'tish
      } catch (error) {
        console.error("Ro'yhatdan o'tishda xatolik:", error.response.data);
      }
    },
  },
};
</script>
