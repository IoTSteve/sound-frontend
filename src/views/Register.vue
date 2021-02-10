<template>
<div>
  
</div>
</template>

<script>
  export default {
    name: "Register",
  
    mounted() {
      this.axios.post('/posts/register', {
      "app_id": "soundtest",
      "dev_id": "lorasense69",
      "payload_fields": "test123",
      "metadata": "bla"
  },
  {useCredentials: true}
    )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    },

  }
</script>

<style>

</style>