<template>
  <base-form-section
    title="Social Links"
    description="Add some social media links"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6">
        <!-- X (formerly Twitter) -->
        <div>
          <label for="x" class="block text-sm font-medium text-gray-700">X (formerly Twitter)</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:twitter-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="x"
              id="x"
              :value="x"
              @input="$emit('update:x', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://x.com/elonmusk"
            />
          </div>
        </div>

        <!-- Discord -->
        <div>
          <label for="discord" class="block text-sm font-medium text-gray-700">Discord</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:discord-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="discord"
              id="discord"
              :value="discord"
              @input="$emit('update:discord', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://discord.gg/elonmusk"
            />
          </div>
        </div>

        <!-- Telegram -->
        <div>
          <label for="telegram" class="block text-sm font-medium text-gray-700">Telegram</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:telegram-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="telegram"
              id="telegram"
              :value="telegram"
              @input="$emit('update:telegram', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://t.me/elonmusk"
            />
          </div>
        </div>

        <!-- Medium -->
        <div>
          <label for="medium" class="block text-sm font-medium text-gray-700">Medium</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:medium-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="medium"
              id="medium"
              :value="medium"
              @input="$emit('update:medium', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://medium.com/@elonmusk"
            />
          </div>
        </div>

        <!-- Instagram -->
        <div>
          <label for="instagram" class="block text-sm font-medium text-gray-700">Instagram</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:instagram-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="instagram"
              id="instagram"
              :value="instagram"
              @input="$emit('update:instagram', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://instagram.com/elonmusk"
            />
          </div>
        </div>

        <!-- TikTok -->
        <div>
          <label for="tiktok" class="block text-sm font-medium text-gray-700">TikTok</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:tiktok-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="tiktok"
              id="tiktok"
              :value="tiktok"
              @input="$emit('update:tiktok', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://tiktok.com/@elonmusk"
            />
          </div>
        </div>

        <!-- Github -->
        <div>
          <label for="github" class="block text-sm font-medium text-gray-700">Github</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:github-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="github"
              id="github"
              :value="github"
              @input="$emit('update:github', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://github.com/elonmusk"
            />
          </div>
        </div>

        <!-- Youtube -->
        <div>
          <label for="youtube" class="block text-sm font-medium text-gray-700">YouTube</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              <icon name="ph:youtube-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="youtube"
              id="youtube"
              :value="youtube"
              @input="$emit('update:youtube', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="https://youtube.com/elonmusk"
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>

<script setup>
const props = defineProps([
  "x",
  "discord",
  "telegram",
  "medium",
  "instagram",
  "tiktok",
  "github",
  "youtube",
]);
</script>
