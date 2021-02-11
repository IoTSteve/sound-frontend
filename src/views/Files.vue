<template>
<div>
  <div v-for="post in posts" :key="post._id"> <!-- //Dateianzeige als plain text wenn man /files aufruft -->
    <h1>{{post._id}}</h1>
    <p>{{post.dev_id}}</p>
    <p>{{post.payload_fields}}</p>
    <p>{{post.metadata}}</p>
  </div>
</div>
</template>

<script>
  export default {
    name: "Files",
    data(){
      return{
        posts:{}
      }
    },
    mounted() {
      this.axios.get('/posts')
        .then(response => {
          console.log(response.data);
          this.posts=response.data
        })
        .catch(error => console.error(error));
    },

  }
</script>

<style>

</style>