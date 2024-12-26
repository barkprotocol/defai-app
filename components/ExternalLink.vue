<template>
  <li>
    <!-- Render nuxt-link if both label and url are provided -->
    <nuxt-link :to="url" target="_blank" v-if="label && url">
      <dt
        class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50"
      >
        <!-- Icon container -->
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500"
        >
          <!-- Render provided icon or fallback icon -->
          <icon v-if="icon" :name="icon" class="h-5 w-5" />
          <icon v-else name="ph:link-simple" class="h-5 w-5" />
        </div>
        <!-- Text container -->
        <div class="w-full flex-grow min-w-0">
          <p class="font-medium text-sm leading-6 text-gray-900">
            {{ label }} <!-- Display label text -->
          </p>
        </div>
      </dt>
    </nuxt-link>
  </li>
</template>

<script setup>
const props = defineProps({
  // The label for the link
  label: {
    type: String,
    required: true,
  },
  // The URL the link should point to
  url: {
    type: String,
    required: true,
  },
  // Optional icon name to display, default is "ph:link-simple"
  icon: {
    type: String,
    default: "ph:link-simple",
  },
});
</script>
