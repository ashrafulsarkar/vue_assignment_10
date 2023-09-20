<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue';
const route = useRoute()
const id = route.params.id

const product = reactive({})

onBeforeMount(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => { 
        product.thumbnail = data.thumbnail
        product.title = data.title
        product.price = data.price
        product.description = data.description
        product.brand = data.brand
        product.category = data.category
    });
})

</script>
<template>
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="product-image">
                        <img :src="product.thumbnail" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="product-details">
                        <h2>{{ product.title }}</h2>
                        <p>{{ product.description }}</p>
                        <p>Brand: {{ product.brand }}</p>
                        <p>Category: {{ product.category }}</p>
                        <p>Price: ${{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>