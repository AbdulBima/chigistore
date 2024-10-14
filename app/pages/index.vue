<template>
    <div>
        <div
        class="flex md:hidden items-center justify-center mx-auto my-6 space-x-2 border border-gray-300 rounded-lg px-4 py-2 max-w-xs w-full"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"/></svg>
        <input
          type="text"
          placeholder="Search..."
          class="focus:outline-none text-xl placeholder-gray-400 w-full"
        />
       
      </div>
      <Hero />
      <ProductList :title="'Best Sellers'" :products="bestSellers" />
      <ProductList :title="'New Arrivals'" :products="newArrivals" />
      <ProductList :title="'Top Picks'" :products="topPicks" />
    </div>
  </template>
  
  <script setup lang="ts">
  import ProductList from "@/components/Productlist.vue"; // adjust the path based on your project structure

  const bestSellers = [
    {
      name: "Mens Casual Premium Slim Fit T-Shirts",
      image: "/shirt.png",
      price: 10,
    },
    {
      name: "Mens Casual Premium Slim Fit T-Shirts",
      image: "/shirt.png",
      price: 12,
    },
    {
      name: "Mens Casual Premium Slim Fit T-Shirts",
      image: "/shirt.png",
      price: 14,
    },
  ];
  
  const newArrivals = [
    {
      name: "Verbal Vogue Tees | T-shirt",
      image: "https://readymadeui.com/images/product7.webp",
      price: 12,
    },
    {
      name: "Jargon Jungle | T-shirt",
      image: "https://readymadeui.com/images/product5.webp",
      price: 15,
    },
    {
      name: "Syllable Streetwear | T-shirt",
      image: "https://readymadeui.com/images/product6.webp",
      price: 14,
    },
  ];
  
  const topPicks = [
    {
      name: "Lexicon Luxe | T-shirt",
      image: "/shirt.png",
      price: 10,
    },
    {
      name: "Adjective Attire | T-shirt",
      image: "https://readymadeui.com/images/product2.webp",
      price: 12,
    },
    {
      name: "ThreadCraft Vibes | T-shirt",
      image: "https://readymadeui.com/images/product3.webp",
      price: 14,
    },
  ];
  </script>
  
  <style scoped></style>
  