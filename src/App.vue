<template>
  <div>
    <div class="container">
      <div class="row my-4">
        <div class="col-md-6">
          <products title="Products" @receive="receiveMessage" />
        </div>
        <div class="col-md-6">
          <cart />
        </div>

        <div class="col-md-12 mt-4" v-if="message">
          <div class="alert alert-info">{{message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cart from './components/Cart.vue'
  import Products from './components/Products.vue'

  export default {
    name: 'App',
    data() {
      return {
        message: null
      }
    },
    components: {
      Cart,
      Products
    },
    methods: {
      receiveMessage(message){
        this.message = message
      }
    }
  }
</script>
