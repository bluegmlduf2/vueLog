import { createApp } from 'vue'
import App from './App.vue'
// 부트스트랩 , 실제 폴더가 node_modules라는 아래의 경로대로 위치함
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import myRouter from './router'//내가 만든 라우터

createApp(App).use(myRouter).mount('#app')
