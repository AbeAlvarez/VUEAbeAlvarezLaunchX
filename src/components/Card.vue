<template>
   <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
      <div class="card">
          <img :src="producto.thumbnailUrl" :alt="`imagen-${producto.title}`" class="card-imag-top"/>
          <div class="card-body">
              <h5 class="card-title">{{producto.title}}</h5>
              <p class="card-text"> $ <span> {{producto.precio}} </span> </p>
              <button class="boton">Añadir</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['producto']
    

}
</script>


<style>
.boton{
    background-color: #451ca7;
    color: rgb(255, 227, 227);
    font-size: 15px;
    border-radius: 8px;
    width: 5rem;
    height: 2rem;
}
</style>