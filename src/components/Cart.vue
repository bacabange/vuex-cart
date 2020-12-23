<template>
  <div>
    <div class="row mb-2" v-for="item in items" :key="item.id">
      <div class="col-md-2">
        <img :src="item.image" :alt="item.name" class="img-fluid">
      </div>

      <div class="col-md-4">
        <p class="m-0">{{item.name}}</p>
        <p class="m-0">{{item.price}}</p>
      </div>
      <div class="col-md-4">
        <p class="m-0 text-right">X{{item.quantity}}</p>
        <p class="m-0 text-right"><strong>{{item.price * item.quantity}}</strong></p>
      </div>
      <div class="col-md-2">
        <button class="btn btn-danger" @click="removeItem(item)">Remove</button>
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <span><strong class="h4">Total: {{total}}</strong></span>
    </div>

    <div class="w-100 mt-4" v-if="items.length > 0">
      <button class="btn btn-danger btn-block" @click="clearCart">Clear cart</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Cart',
    computed: {
      ...mapState({
        items: state => state.cart.items,
      }),
      ...mapGetters({
        total: 'cart/cartTotalPrice'
      })
    },
    methods: {
      ...mapActions('cart', [
        'addProductToCart',
        'removeItem',
        'clearCart',
      ]),
    }
  }
</script>

