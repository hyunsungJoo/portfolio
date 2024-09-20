import { createApp } from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import './global.css'  // 글로벌 CSS 파일 임포트

const app = createApp(App);

app.use(VueScrollTo);
app.mount('#app');
