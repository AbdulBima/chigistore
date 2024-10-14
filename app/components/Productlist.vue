<template>
    <div class="font-sans p-4 mx-auto relative w-full md:w-[80vw] my-10">
      <h2 class="text-2xl md:text-4xl border-l-4 border-blue-700 font-normal text-gray-800 mb-12">
        <span class="ml-2">{{ title }}</span>
      </h2>
  
      <!-- Show loading state if isLoading is true -->
      <div v-if="isLoading" class="text-center text-lg text-gray-500">
        Loading products...
      </div>
  
      <!-- Product Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
        >
          <div class="w-full aspect-w-12 aspect-h-8 lg:h-[500px]">
            <NuxtLink :to="`/product/${product.id}`">
              <img
                :src="product.image"
                :alt="`Product ${index + 1}`"
                class="h-full w-full object-cover"
              />
            </NuxtLink>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-400">${{ product.price }}</h4>
            </div>
            <!-- Add to Cart Button -->
            <button
              @click="addToCart(product)"
              class="mt-4 w-full bg-blue-500 text-white text-sm font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useCartStore } from "@/store/cart"; // Import the cart store
  
  interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
  }
  
  export default defineComponent({
    name: "ProductList",
    props: {
      title: {
        type: String,
        required: true,
      },
      products: {
        type: Array as () => Product[],
        required: true,
      },
      isLoading: {
        type: Boolean,
        required: true,
      },
    },
    setup(props) {
      const cartStore = useCartStore(); // Initialize the cart store
  
      // Add to Cart functionality
      const addToCart = (product: Product) => {
        cartStore.addToCart(product); // Add product to cart using store
      };
  
      return {
        addToCart,
        title: props.title,
        products: props.products,
        isLoading: props.isLoading,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  