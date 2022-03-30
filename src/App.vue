<template>

  <div class="container">
    <img class="logo" alt="logo yum" src="./assets/logo.png">
    <h1>Tienda Online</h1>
    {{productos}}
    <hr>
    <div class="row">
    <Card
      v-for="producto of productos" :key="producto.id"
      :producto="producto"
      />
    </div>
  </div>

</template>

<script>

//------------CONTROL ERRORES: CAR MIN 50.40 INDEX.JS: MUTATIONS, ACTIONS
//------------CONTROL ERRORES: CAR MIN 57.10 CARD.VUE

import {useStore} from 'vuex'
import {computed, onMounted} from 'vue' 
import Card from './components/Card.vue'


export default {
  name: 'App',
  components: {
    Card
  },
  setup(){ 
    const store = useStore()
    onMounted (() => {
      store.dispatch('fetchData')
    })
    const productos = computed(() => store.state.productos )
    return {productos} 
  }
}
</script>

<style>

body{
  background:rgb(253, 230, 234);
}

.logo{
  width: 5rem;
}

</style>

