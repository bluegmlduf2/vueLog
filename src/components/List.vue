<template>
    <div v-for="(blog) in blogs" :key="blog.number" class="mt-5"  @click="$router.push('/vueLog/detail/'+blog.number)" :blogs="blogs">
      <h5>{{blog.title}}</h5>
      <p>{{blog.date}}</p>
    </div>
</template>

<script>
export default {
    name:"List",
    props:{
        blogs:Array
    }
}
</script>

<style>

</style>