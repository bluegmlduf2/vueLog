<template>
  <div class="mt-4 commentNotice">
      <p v-if="noticeState">아름다운 댓글문화를 만들어가요!!</p>
  </div>
</template>

<script>
export default {
    name:"commentNotice",
    data() {
      return {
        noticeState:true
      }
    },
    mounted(){
      setTimeout(() => {
        this.noticeState=false;
      }, 1500);
    }
}
</script>

<style>
.commentNotice{
  color:teal;
}
</style>