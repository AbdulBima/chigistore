<template>
    <footer class="bg-gray-900 text-white py-12 md:py-32">
      <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
          <div class="sm:col-span-2">
            <h1 class="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl">
                Subscribe to our newsletter to get updates on our latest offers!            </h1>
  
            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="email"
                v-model="email"
                class="px-4 py-2 w-full text-gray-300 bg-whiteborder rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button
                class="w-full px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300 transform md:w-auto md:mx-4 bg-blue-700 rounded-lg hover:bg-blue-600"
                @click="subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>
  
          <div>
            <p class="font-semibold mt-10 md:mt-0">Categories</p>
            <div class="flex flex-col font-thin text-gray-700items-start mt-5 space-y-2">
              <a href="#" class="hover:underline hover:text-blue-500">Fashion</a>
              <a href="#" class="hover:underline hover:text-blue-500">Health & Beauty</a>
              <a href="#" class="hover:underline hover:text-blue-500">Home & Office</a>
              <a href="#" class="hover:underline hover:text-blue-500">Computing</a>
            </div>
          </div>
  
          <div>
            <p class="font-semibold mt-10 md:mt-0">Categories</p>
            <div class="flex flex-col font-thin text-gray-700items-start mt-5 space-y-2">
              <a href="#" class="hover:underline hover:text-blue-500">About</a>
              <a href="#" class="hover:underline hover:text-blue-500">Blog</a>
              <a href="#" class="hover:underline hover:text-blue-500">Contact</a>
              <a href="#" class="hover:underline hover:text-blue-500">Refunds</a>
              <a href="#" class="hover:underline hover:text-blue-500">Shipping</a>
            </div>
          </div>
  
          <div>
            <p class="font-semibold">Support</p>
            <div class="flex flex-col items-start mt-5 space-y-2">
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const email = ref<string>('');
  
  // Function to handle the subscription
  const subscribe = () => {
    console.log('Email submitted:', email.value);
    // Logic to process subscription goes here
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles for the footer here */
  </style>
  