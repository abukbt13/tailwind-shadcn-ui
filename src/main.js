import { createApp } from 'vue'
import './assets/index.css'
import router from './router'
import App from "@/App.vue";  // Import the router

const app = createApp(App)

app.use(router)  // Use the router in the app
app.mount('#app')
