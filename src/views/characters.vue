<template>
  <div class="container">
    <h2 class="text-center my-3">characters</h2>
    <div id="carouselExample" class="carousel slide my-5 bg-black">
      <div class="carousel-inner text-center" v-if="content">
        <div
          v-for="(char, i) in content.characters"
          :key="i"
          :class="['carousel-item py-3', { active: i === 'harry_potter' }]"
        >
          <div class="card w-50 mx-auto">
            <div class="card-body">
              <h5 class="card-title">
                {{ char.name }}
              </h5>
              <p class="card-text">
                {{ char.description }}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        @click="prevSlide"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        @click="nextSlide"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="lang text-center">
      <button class="btn btn-primary me-3" @click="switchLanguage('en')">
        English
      </button>
      <button class="btn btn-primary" @click="switchLanguage('ar')">
        Arabic
      </button>
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

<style></style>
