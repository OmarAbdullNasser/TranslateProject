<template>
  <div class="container">
    <div class="row" v-if="content">
      <div v-for="(char, i) in content.settings" class="my-5" :key="i">
        <div v-if="$route.params.lang === 'en'">
          <h1>Name :</h1>
          {{ char.name }}
        </div>

        <!-- Display the Arabic version -->
        <div v-else>
          <h1>الاسم :</h1>
          {{ char.name }}
        </div>

        <div class="col-12">
          <div v-if="$route.params.lang === 'en'">
            <h1>description :</h1>
            {{ char.description }}
          </div>

          <!-- Display the Arabic version -->
          <div v-else>
            <h1>الوصف:</h1>
            {{ char.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const content = ref(null);
const route = useRoute();

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
</script>

<style></style>
