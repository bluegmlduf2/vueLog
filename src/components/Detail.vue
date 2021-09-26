<template>
  <div>
      <h4>상세페이지</h4>
      <h5>{{blogs[$route.params.id].title}}</h5>
      <p>{{blogs[$route.params.id].content}}</p>
  </div>
  <router-view name="commentNotice"></router-view>
  <router-view></router-view>
    <div>
        <button type="button" class="btn btn-light" @click="$router.push($route.params.id+'/member')">멤버보기</button>
        <button type="button" class="btn btn-light">댓글남기기</button>
    </div>
</template>

<script>
export default {
    name:"Detail",
    props:{
        blogs:Array
    }
}
</script>

<style>

</style>