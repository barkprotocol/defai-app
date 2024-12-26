<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-profile
          v-model:name="data.name"
          v-model:desc="data.desc"
          v-model:image="data.image"
        />
        <app-form-hr />
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Social Media Links</h2>
          <div v-for="(link, platform) in data.socialLinks" :key="platform" class="flex flex-col space-y-2">
            <label :for="platform" class="text-sm font-medium text-gray-700 capitalize">{{ platform }}</label>
            <input
              v-model="data.socialLinks[platform]"
              :id="platform"
              type="url"
              placeholder="Enter URL"
              class="px-4 py-2 border rounded-lg bg-white"
            />
          </div>
        </div>
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <a
          href="https://github.com/bark-protocol/"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Github </span>
          <icon name="mdi:github" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a
      href="https://x.com/bark_protocol"
      target="_blank"
      class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"
    >
      Powered by Solana
    </a>
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
import { ref } from 'vue';

const data = ref({
  name: "",
  desc: "",
  image: "",
  socialLinks: {
    twitter: "",
    instagram: "",
    medium: "",
    github: "",
    telegram: "",
    discord: "",
    email: "",
    tiktok: "",
    youtube: "",
  },
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    name: "BARK Protocol",
    desc: "Innovating in DeFi and SocialFi on Solana through BARK, with a mission to empower communities and drive impactful charity initiatives.",
    socialLinks: {
      twitter: "https://twitter.com/bark_protocol",
      instagram: "https://www.instagram.com/bark.protocol",
      email: "mail@barkprotocol.net",
      medium: "https://medium.com/@barkprotocol",
      github: "https://github.com/bark_protocol",
      telegram: "https://t.me/bark_protocol",
      youtube: "https://youtube.com/@bark_protocol",
    },
    ls: [
      {
        label: "Website",
        icon: "ph:globe-duotone",
        url: "https://barkprotocol.net",
      },
      {
        label: "Wishlist",
        icon: "ant-design:amazon-outlined",
        url: "https://amazon.in",
      },
      {
        label: "React JS course",
        icon: "grommet-icons:reactjs",
        url: "https://reactjs.org/",
      },
      {
        label: "Donate for blink",
        icon: "iconoir:donate",
        url: "https://who.int",
      },
      {
        label: "Download resume",
        icon: "ph:file-pdf",
        url: "https://google.com",
      },
    ],
  };
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>

<style scoped>
/* Add your styles for better layout or design here */
</style>
