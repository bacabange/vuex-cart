<template>
  <div class="row">
    <div class="col-12">
      <h4>{{title}}</h4>
    </div>
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <div class="w-100">
        <img :src="product.image" :alt="product.name" class="img-fluid">
      </div>
      <h5 class="text-center">{{product.name}}</h5>
      <p class="text-center">{{product.price}}</p>
      <div class="w-100">
        <button class="btn btn-primary btn-block" @click="addProductToCart(product)">Add to cart</button>
      </div>
    </div>

    <div class="col-12 mt-4">
      <button class="btn btn-info" @click="send">Send to parent</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Products',
    props: ['title'],
    computed: {
      ...mapState({
        products: state => state.products.all,
      }),
    },
    methods: {
      ...mapActions('cart', [
        'addProductToCart',
      ]),
      send() {
        this.$emit('receive', 'From child to parent')
      }
    }
  }
</script>

