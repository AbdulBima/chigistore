<template>
    <div class="font-sans ">
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

      <h1 class="flex md:hidden w-full ml-5 text-center py-4 text-black mx-auto">Home/Category/Mens Casual Premium Slim Fit T-</h1>
      <div class="p-4 w-full md:w-[80vw] md:py-20  mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-6">
  
          <div class="w-full lg:sticky top-0 sm:flex gap-2">
            <div class="hidden md:block sm:space-y-3 w-16 max-sm:w-12 max-sm:mb-4 max-sm:gap-4">
              <img
                src="https://readymadeui.com/images/product1.webp"
                alt="Product1"
                class="w-full hidden md:block cursor-pointer rounded-md outline"
              />
              <img
                src="https://readymadeui.com/images/product6.webp"
                alt="Product2"
                class="w-full cursor-pointer rounded-md"
              />
              <img
                src="https://readymadeui.com/images/product7.webp"
                alt="Product3"
                class="w-full cursor-pointer hidden md:block rounded-md"
              />
              <img
                src="https://readymadeui.com/images/product3.webp"
                alt="Product4"
                class="w-full cursor-pointer hidden md:block rounded-md"
              />
            </div>
            <img
              src="https://readymadeui.com/images/product2.webp"
              alt="Product"
              class="w-full md:w-4/5 rounded-md object-cover"
            />
          </div>
  
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Adjective Attire | T-shirt</h2>
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="text-gray-800 text-xl font-bold">$45.00</p>
              <p class="text-gray-400 text-xl decoration-slice"><strike>$42.00</strike> <span class="text-sm ml-1.5 bg-gray-50 text-blue-600">7 left</span></p>
            </div>
  
            <div class="flex space-x-2 mt-4">
              <!-- Changed star color to yellow -->
              <svg class="w-5 fill-yellow-500" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-500" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-500" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-500" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h1 class="text-black">(200 ratings)</h1>
            </div>
  
            <button type="button" class="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl">Add to cart</button>
  
            <!-- Product Details Section -->
            <div class="mt-8">
              <h3 class="text-xl font-bold text-gray-800">Product details</h3>
              <p class="text-2xl text-gray-800 mt-4">
                Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. 
                Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. 
                The Henley style round neckline includes a three-button placket.
              </p>
            </div>
  
          </div>
        </div>
      </div>

      <ProductList :title="'More items to explore'" " />

    </div>
  </template>
  
  <script setup lang="ts">
    // TypeScript logic (if needed) goes here
    import ProductList from "~/components/ProductList.vue"; // adjust the path based on your project structure


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
  </script>
  
  <style scoped>
  /* Add scoped styles if necessary */
  </style>
  