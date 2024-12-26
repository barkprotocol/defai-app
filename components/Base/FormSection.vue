<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0 sticky top-0">
        <!-- Title -->
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {{ title }}
        </h3>
        <!-- Description -->
        <p class="mt-1 text-sm text-gray-600">
          {{ description }}
        </p>
        <!-- Helper Text Slot -->
        <slot name="helpertext" />
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0 relative">
      <!-- Main Content Slot -->
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // Section title (can be passed from the parent)
  title: { type: String, default: "" },
  
  // Section description (can be passed from the parent)
  description: { type: String, default: "" },
});
</script>
