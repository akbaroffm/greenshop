import { createApp } from 'vue';
import './style.css';
import store from './store';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App).use(store).use(ElementPlus).use(router).mount('#app');
