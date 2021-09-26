import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import Member from './components/Member.vue'
import Comment from './components/Comment.vue'
import CommentNotice from './components/CommentNotice.vue'

//$route : 경로관련
//$router : 페이지이동관련

const routes = [
  {
    path: "/vueLog",
    component: Home,
  },
  {
    path: "/vueLog/list",
    component: List,
  },
  {
    path: "/vueLog/detail/:id",
    component: Detail,
    children:[
        { path: "member",component: Member},
        { path: "comment",
          beforeEnter: () => {
            const loginStat=false
            if(loginStat){
              return '/vueLog'
            }
          },
          components: {
            default:Comment,
            commentNotice:CommentNotice
          }
        }
    ]
  }
];

//createRouter() vue-router는 원래 이 부분만 사용한다.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//모든 라우터 들이 실행되기 전에 실행되는 녀석을 추가 (navigation guard)
router.beforeEach(() => {
    console.log('ip:'+"127.0.0.1")
})

export default router; 