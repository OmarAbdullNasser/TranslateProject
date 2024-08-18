<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary text-center">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link active"
              :to="{ name: 'Home', params: { lang: 'en' } }"
              >Home</RouterLink
            >
            <!-- <a class="" aria-current="page" href="#">Home</a> -->
          </li>

          <li class="nav-item">
            <RouterLink
              class="nav-link active"
              :to="{ name: 'characters', params: { lang: 'en' } }"
              >characters</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink
              class="nav-link active"
              :to="{ name: 'Locations', params: { lang: 'en' } }"
              >Locations</RouterLink
            >
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              lang
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink
                  class="nav-link active"
                  :to="{ name: route.name, params: { lang: 'en' } }"
                  >en</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="nav-link active"
                  :to="{ name: route.name, params: { lang: 'ar' } }"
                  >ar</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<style></style>
