<!-- In your HomePage.vue or any other component -->
<template>
  <div class="container">
    <div class="my-3">
      <div class="d-flex justify-content-center align-items-center">
        <span class="mx-3 display-3" v-if="content">
          {{ content.title }}
        </span>
      </div>

      <div class="poster text-center mx-auto my-4" v-if="content">
        <img :src="content.img" alt="" class="img-fluid" />
      </div>

      <div class="mt-4 justify-content-center align-items-center">
        <p class="mx-3" v-if="content">
          {{ content.description ? content.description : "" }}
        </p>
      </div>

      <!-- <div class="lang text-center">
        <button class="btn btn-primary me-3" @click="switchLanguage('en')">
          English
        </button>
        <button class="btn btn-primary" @click="switchLanguage('ar')">
          Arabic
        </button>
      </div> -->
    

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// Setup refs and route handling
const content = ref(null);
const route = useRoute();
const router = useRouter();

// Function to fetch content based on language
const fetchContent = async (lang) => {
  try {
    const url =
      lang === "ar"
        ? "http://localhost:3004/siteContent"
        : "http://localhost:3000/siteContent";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    content.value = await response.json();
    console.log(`Content fetched for language: ${lang}`, content.value);
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
};

// Watch for changes in the route's 'lang' param and fetch content
watch(
  () => route.params.lang,
  (newLang) => {
    fetchContent(newLang);
  },
  { immediate: true }
);

// Function to switch languages
const switchLanguage = (lang) => {
  router.push({ name: route.name, params: { lang } });
  
};
</script>
<style>
.poster {
  height: auto;
  width: 200px;
}
</style>
