import { defineStore } from 'pinia';
import { ref } from 'vue';

// Cart store to manage cart data
export const useCartStore = defineStore('cart', () => {
  // Reactive cart state
  const cartItems = ref<any[]>([]);

  // Load cart items from localStorage if available (client-side only)
  const loadCart = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        cartItems.value = JSON.parse(savedCart);
      }
    }
  };

  // Add product to the cart
  const addToCart = (product: any) => {
    const existingProductIndex = cartItems.value.findIndex(
      (item) => item.id === product.id
    );
    
    if (existingProductIndex > -1) {
      // If product exists in cart, increase quantity
      cartItems.value[existingProductIndex].quantity += 1;
    } else {
      // If product is not in the cart, add new
      cartItems.value.push({ ...product, quantity: 1 });
    }
    saveCart();  // Save the updated cart to localStorage
  };

  // Remove item from the cart
  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    saveCart();  // Save the updated cart to localStorage
  };

  // Save cart to localStorage (client-side only)
  const saveCart = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cart', JSON.stringify(cartItems.value));
    }
  };

  // Clear the cart
  const clearCart = () => {
    cartItems.value = [];
    saveCart();  // Save the cleared cart to localStorage
  };

  // Automatically load cart when the store is initialized
  if (typeof window !== 'undefined') {
    loadCart();
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    loadCart, // Export `loadCart` if needed for manual reloading
  };
});
