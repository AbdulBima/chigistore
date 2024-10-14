<template>
    <div class="font-sans max-w-5xl max-md:max-w-xl px-10 mx-auto bg-white my-10 py-4 md:py-8">
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

      <h1 class="text-lg md:text-3xl font-bold text-gray-800 text-left">Shopping Cart</h1>
  
      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <div class="md:col-span-2 space-y-4">
          <!-- Item 1 -->
          <div class="grid grid-cols-3 items-start gap-4">
            <div class="col-span-2 flex items-start gap-4">
              <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                <img
                  src="https://readymadeui.com/images/product14.webp"
                  class="w-full h-full object-contain"
                />
              </div>
  
              <div class="flex flex-col">
                <h3 class="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                <p class="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>
  
                <button
                  type="button"
                  class="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 fill-current inline"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>
  
            <div class="ml-auto">
              <h4 class="text-lg max-sm:text-base font-bold text-gray-800">$20.00</h4>
  
              <button
                type="button"
                class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                  ></path>
                </svg>
  
                <span class="mx-3 font-bold">2</span>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
          <hr class="border-gray-300" />
  
          <!-- Repeat Item Structure for other items -->
          <!-- You can repeat the similar structure for additional items like Watch Timex, French Connection, etc -->
  
          <div class="grid grid-cols-3 items-start gap-4">
            <div class="col-span-2 flex items-start gap-4">
              <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                <img
                  src="https://readymadeui.com/images/watch5.webp"
                  class="w-full h-full object-contain"
                />
              </div>
  
              <div class="flex flex-col">
                <h3 class="text-base font-bold text-gray-800">Smart Watch Timex</h3>
                <p class="text-xs font-semibold text-gray-500 mt-0.5">Size: SM</p>
  
                <button
                  type="button"
                  class="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 fill-current inline"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>
  
            <div class="ml-auto">
              <h4 class="text-lg max-sm:text-base font-bold text-gray-800">$60.00</h4>
  
              <button
                type="button"
                class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                  ></path>
                </svg>
  
                <span class="mx-3 font-bold">1</span>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        <div class="bg-white shadow-md rounded-md p-4 h-max">
  <h3 class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
    Order Summary
  </h3>

  <!-- Subtotal -->
  <div class="flex justify-between items-center mt-6">
    <span class="text-gray-600 text-sm">Subtotal</span>
    <span class="text-gray-800 text-base font-bold">$80.00</span>
  </div>

  <!-- Shipping Fee -->
  <div class="flex justify-between items-center mt-2">
    <span class="text-gray-600 text-sm">Shipping Fee</span>
    <span class="text-gray-800 text-base font-bold">$5.00</span>
  </div>

  <!-- Total -->
  <div class="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
    <span class="text-gray-800 text-base font-bold">Total</span>
    <span class="text-gray-800 text-xl font-bold">$85.00</span>
  </div>

  <!-- Proceed to Checkout Button -->
  <button
    type="button"
    class="mt-6 w-full bg-blue-500 text-white text-base font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
  >
    Proceed to Checkout
  </button>
</div>

      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script logic needed yet
  </script>
  
  <style scoped>
  /* Add your custom styles if needed */
  </style>
  