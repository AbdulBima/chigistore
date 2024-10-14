<template>
    <div class="font-sans p-4 mx-auto relative w-full md:w-[80vw] my-10">
      <!-- Dynamic Title -->
      <h2 class="text-2xl md:text-4xl border-l-4 border-blue-700 font-normal text-gray-800 mb-12">
        <span class="ml-2">{{ title }}</span>
      </h2>
  
      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Loop through products -->
      
      <NuxtLink to="/product/gdgdhd">

        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
        >
          <div class="w-full aspect-w-12 aspect-h-8 lg:h-[500px]">
            <img
              :src="product.image"
              :alt="`Product ${index + 1}`"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">{{ product.title }}</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-400">${{ product.price }}</h4>
            </div>
            <!-- Add to Cart Button -->
            <button
              class="mt-4 w-full bg-blue-500 text-white text-sm font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </NuxtLink>
        


      </div>
    </div>
  </template>
  
  <script lang="ts">
  import axios from "axios";
  import { defineComponent, ref, onMounted } from "vue";
  
  interface Product {
    title: string;
    image: string;
    price: number;
  }
  
  export default defineComponent({
    name: "ProductList",
    props: {
      title: {
        type: String,
        default: "Premium Threads", // Default title if not passed
      },
    },
    setup() {
      // Ref to store products
      const products = ref<Product[]>([]);
  
      // Fetch the first three products from the API
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          // Limit to first three products
          products.value = response.data.slice(0, 3);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      // Call fetch function on component mount
      onMounted(fetchProducts);
  
      return {
        products,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Additional styles (if needed) */
  </style>
  