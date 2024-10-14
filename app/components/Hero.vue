<template>
    <div class="relative mx-auto w-full md:w-[90vw] mt-4 md:mt-10 mb-6 md:mb-32 h-[70vh] md:h-[60vh] bg-cover  " :style="{ backgroundImage: `url('${imageUrl}')` }">
      <div class="absolute inset-0 justify-center top-32 flex ">
        <!-- Centered Content -->
        <div class="text-center text-black">
          <h1 class="text-5xl font-bold mb-4">New Arrivals in Computing</h1>
          <button class="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
            Shop now
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'ImageWithTextButton',
    data() {
      return {
        // The URL of the background image
        imageUrl: '/hero.png',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add some custom styles if necessary */
  </style>
  