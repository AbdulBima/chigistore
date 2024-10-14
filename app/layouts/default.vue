<script setup lang="ts">
import DesktopNavBar from "~/components/DesktopNavBar.vue";
</script>

<template>
  <div><DesktopNavBar /><slot />
  
  <Footer/>
  </div>
</template>

<style scoped></style>
