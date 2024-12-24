<template>
  <div>
    <h2>Tizimga kirish</h2>
    <form @submit.prevent="loginUser">
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
      <button type="submit">Kirish</button>
    </form>
    <div>
      <router-link to="/register">Ro'yxatdan o'tish</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(
          "https://f77a51255486f515.mokky.dev/auth",
          this.formData
        );
        console.log("Kirish muvaffaqiyatli:", response.data);
        localStorage.setItem("token", response.data.token); // Tokenni saqlash
        this.$router.push("/"); // Kirishdan keyin dashboard sahifasiga o'tish
      } catch (error) {
        console.error("Kirishda xatolik:", error.response.data);
      }
    },
  },
};
</script>
