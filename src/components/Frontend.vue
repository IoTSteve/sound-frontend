


<template>


  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
   <br>
    
      
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      
 
    </ul>
    <h3>Essential Links</h3>
    <ul>
    
    </ul>
    <h3>Ecosystem</h3>
    <ul>
    </ul>
      
  </div>
</template>
<script>



export default {
  name: 'Frontend',
  props: {
    msg: String
  },
  mounted() {
    this.axios.get('/')
      .then(response => {
        console.log(response.data);
      })
        .catch(error => console.error(error));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
