<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Frontend msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Frontend from '@/components/Frontend.vue'

export default {
  name: 'Home',
  components: {
    Frontend
  }

  
}
</script>
