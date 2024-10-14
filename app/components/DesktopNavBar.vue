<template>
  <header class="bg-white shadow-md md:px-16 mx-auto font-Montserrat">
    <div class="w-full mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo Section -->
      <div class="flex items-start space-x-4">
        <NuxtLink to="/" class="text-xl font-bold">Logo</NuxtLink>
      </div>

      <!-- Categories Links (Desktop) -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink
          to="/electronics"
          class="text-lg font-medium text-gray-800 hover:text-blue-600"
        >Electronics</NuxtLink>
        <NuxtLink
          to="/health-beauty"
          class="text-lg font-medium text-gray-800 hover:text-blue-600"
        >Health & Beauty</NuxtLink>
        <NuxtLink
          to="/home-office"
          class="text-lg font-medium text-gray-800 hover:text-blue-600"
        >Home & Office</NuxtLink>
        <NuxtLink
          to="/computing"
          class="text-lg font-medium text-gray-800 hover:text-blue-600"
        >Computing</NuxtLink>
      </nav>

      <!-- Account and Cart Icons -->
      <div class="flex space-x-4">
        <!-- Search Bar (Desktop) -->
        <div
          class="hidden md:flex items-center space-x-2 border border-gray-300 rounded-lg px-2 py-1 max-w-xs w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            class="focus:outline-none text-lg placeholder-gray-400 w-full"
          />
        </div>
        <NuxtLink to="/account" class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="black"
              stroke-dasharray="28"
              stroke-dashoffset="28"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
              <path
                d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
            </g>
          </svg>
        </NuxtLink>

        <NuxtLink to="/cart" class="block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
            />
          </svg>
          <span
            class="absolute top-0 right-0 block w-4 h-4 text-xs text-white bg-red-500 rounded-full text-center"
            >0</span
          >
          <!-- Cart items -->
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Menu (Hidden by default, shown when toggled) -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md py-4 px-6">
      <nav class="space-y-4">
        <NuxtLink
          to="/electronics"
          class="block text-lg font-medium text-gray-800 hover:text-blue-600"
        >Electronics</NuxtLink>
        <NuxtLink
          to="/health-beauty"
          class="block text-lg font-medium text-gray-800 hover:text-blue-600"
        >Health & Beauty</NuxtLink>
        <NuxtLink
          to="/home-office"
          class="block text-lg font-medium text-gray-800 hover:text-blue-600"
        >Home & Office</NuxtLink>
        <NuxtLink
          to="/computing"
          class="block text-lg font-medium text-gray-800 hover:text-blue-600"
        >Computing</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'default',
  setup() {
    const isMenuOpen = ref(false); // Mobile menu state

    // Toggle the mobile menu
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
/* Ensure all flex items align correctly */
header {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
}

a {
  transition: all 0.3s ease;
}

a:hover {
  color: #1e40af;
}
</style>
