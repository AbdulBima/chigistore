<template>
  <div>
    <!-- Search Bar -->
    <div
      class="flex md:hidden items-center justify-center mx-auto my-6 space-x-2 border border-gray-300 rounded-lg px-4 py-2 max-w-xs w-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
        <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"/>
      </svg>
      <input
        type="text"
        placeholder="Search..."
        class="focus:outline-none text-xl placeholder-gray-400 w-full"
      />
    </div>

   <Hero/>

   <div class="w-[80vw] mx-auto pb-32">
    <!-- Best Sellers Section -->
    <h2 class="text-2xl md:text-4xl border-l-4 mt-8  border-blue-700 font-normal text-gray-800 mb-12">
      <span class="ml-2">Best Sellers</span>
    </h2>
    
    <!-- Loading State or Products -->
    <div v-if="isLoading" class="text-center text-lg text-gray-500">
      Loading products...
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(product, index) in bestSellers"
        :key="product.id"
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
          <h3 class="text-lg font-bold text-gray-800">{{ product.title }}</h3>
          
          <div class="mt-4 flex items-center flex-wrap gap-2">
            <h4 class="text-lg font-bold text-gray-400">${{ product.price }}</h4>
            <span class="text-sm text-gray-500">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</span>
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

    <!-- New Arrivals Section -->
    <h2 class="text-2xl md:text-4xl border-l-4  mt-8  border-blue-700 font-normal text-gray-800 mb-12">
      <span class="ml-2">New Arrivals</span>
    </h2>

    <div v-if="isLoading" class="text-center text-lg text-gray-500">
      Loading products...
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(product, index) in newArrivals"
        :key="product.id"
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
          <h3 class="text-lg font-bold text-gray-800">{{ product.title }}</h3>
          
          <div class="mt-4 flex items-center flex-wrap gap-2">
            <h4 class="text-lg font-bold text-gray-400">${{ product.price }}</h4>
            <span class="text-sm text-gray-500">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</span>
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

    <!-- Top Picks Section -->
    <h2 class="text-2xl md:text-4xl border-l-4  mt-8  border-blue-700 font-normal text-gray-800 mb-12">
      <span class="ml-2">Top Picks</span>
    </h2>

    <div v-if="isLoading" class="text-center text-lg text-gray-500">
      Loading products...
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(product, index) in topPicks"
        :key="product.id"
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
          <h3 class="text-lg font-bold text-gray-800">{{ product.title }}</h3>
          
          <div class="mt-4 flex items-center flex-wrap gap-2">
            <h4 class="text-lg font-bold text-gray-400">${{ product.price }}</h4>
            <span class="text-sm text-gray-500">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</span>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useCartStore } from "~/store/cart"; // Assuming you have a cart store
import Hero from "~/components/Hero.vue";

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default defineComponent({
  name: "IndexPage",
  setup() {
    // Define types for products
    const bestSellers = ref<Product[]>([]);
    const newArrivals = ref<Product[]>([]);
    const topPicks = ref<Product[]>([]);

    // Loading state
    const isLoading = ref(true);

    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        const products = response.data;

        // Categorize products
        bestSellers.value = products.slice(0, 3); // Best sellers
        newArrivals.value = products.slice(3, 6); // New arrivals
        topPicks.value = products.slice(6, 9); // Top picks
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        isLoading.value = false; // Set loading to false after fetching
      }
    };

    // Add product to the cart
    const cartStore = useCartStore();
    const addToCart = (product: Product) => {
      cartStore.addToCart(product);
    };

    // Fetch products on component mount
    onMounted(fetchProducts);

    return {
      bestSellers,
      newArrivals,
      topPicks,
      isLoading, // Make sure to return `isLoading`
      addToCart,
    };
  },
});
</script>


<style scoped>
/* Add your scoped styles here */
</style>
