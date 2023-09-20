<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

const products = ref([])

onBeforeMount(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
        .then(data => { 
            products.value = data.products
        })
})

</script>
<template>
    <section class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-3" v-for="product in products" :key="product.id">
                    <div class="card">
                        <div class="product-image">
                            <img :src="product.thumbnail" class="card-img-top" :alt="product.title">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{product.title}}</h5>
                            <p class="card-text">${{ product.price }}</p>
                            <RouterLink class="btn btn-primary" :to="{ name: 'singleproduct', params: { id: product.id } }">View Details</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.product-image img {
    height: 250px;
    width: 100%;
}
</style>