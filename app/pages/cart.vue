<template>
    <div class="font-sans max-w-5xl max-md:max-w-xl px-10 mx-auto bg-white my-10 py-4 md:py-8">
      <h1 class="text-lg md:text-3xl font-bold text-gray-800 text-left">Shopping Cart</h1>
  
      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <div class="md:col-span-2 space-y-4">
          <!-- Loop through cart items -->
          <div v-for="(item, index) in cartItems" :key="index" class="grid grid-cols-3 items-start gap-4">
            <div class="col-span-2 flex items-start gap-4">
              <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                <img :src="item.image" class="w-full h-full object-contain" />
              </div>
              <div class="flex flex-col">
                <h3 class="text-base font-bold text-gray-800">{{ item.title }}</h3>
                <p class="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>
                <button
                  @click="removeFromCart(item.id)"
                  class="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current inline" viewBox="0 0 24 24">
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>
  
            <div class="ml-auto">
              <h4 class="text-lg max-sm:text-base font-bold text-gray-800">${{ item.price }}</h4>
            </div>
          </div>
          <hr class="border-gray-300" />
        </div>
  
        <!-- Summary Section -->
        <div class="bg-white shadow-md rounded-md p-4 h-max">
          <h3 class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <div class="flex justify-between items-center mt-6">
            <span class="text-gray-600 text-sm">Subtotal</span>
            <span class="text-gray-800 text-base font-bold">${{ cartItems.reduce((sum, item) => sum + item.price, 0) }}</span>
          </div>
          <button
            class="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useCartStore } from "~/store/cart"; // Import cart store
  
  export default defineComponent({
    name: "CartPage",
    setup() {
      const cartStore = useCartStore(); // Use Pinia store
      const cartItems = cartStore.cartItems;
  
      const removeFromCart = (productId: number) => {
        cartStore.removeFromCart(productId); // Remove item from cart
      };
  
      return {
        cartItems,
        removeFromCart,
      };
    },
  });
  </script>
  