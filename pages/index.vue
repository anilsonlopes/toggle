<template>
  <main
    class="h-screen flex items-center justify-center bg-black"
    :class="{
      'bg-green-500': disponibility === 'disponible',
      'bg-red-500': disponibility === 'indisponible',
      'bg-gray-500': disponibility === 'undefined',
    }"
    @click="toggleDisponibility"
  >
    <h1 class="text-white font-mono text-6xl select-none">
      {{ titlePage }}
    </h1>
  </main>
</template>

<script lang="ts" setup>
type Disponibility = "disponible" | "indisponible" | "undefined";

const toggleDisponibility = () => {
  if (disponibility.value === "disponible") {
    disponibility.value = "indisponible";
  } else if (disponibility.value === "indisponible") {
    disponibility.value = "undefined";
  } else {
    disponibility.value = "disponible";
  }
};

const disponibility = useState<Disponibility>(
  "disponibility",
  () => "undefined"
);

const titlePage = computed(() => {
  if (disponibility.value === "disponible") {
    return "Disponível";
  } else if (disponibility.value === "indisponible") {
    return "Indisponível";
  } else {
    return "Indefinido";
  }
});

const faviconPage = computed(() => {
  if (disponibility.value === "disponible") {
    return "/favicon-green.ico";
  } else if (disponibility.value === "indisponible") {
    return "/favicon-red.ico";
  } else {
    return "/favicon.ico";
  }
});

useSeoMeta({
  title: titlePage,
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/icon",
      href: faviconPage,
    },
  ],
});
</script>

<style scoped>
main {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 14 14'%3E%3C!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ --%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M1.972.08H1.97A1.49 1.49 0 0 0 .08 1.97l.473-.162l-.473.163l.001.002l.002.006l.008.024l.032.092l.12.35L.675 3.7l3.07 8.944l.128.373l.035.104l.01.03a.995.995 0 0 0 1.73.56a1 1 0 0 0 .193-.26c.045-.088.078-.187.11-.279l.001-.004l.995-2.87l.65-1.876l.213-.613l.002-.005l.007-.002l.617-.218l1.885-.667a323 323 0 0 0 2.878-1.027l.046-.018c.11-.043.307-.118.465-.276a.994.994 0 0 0 0-1.406l-.01-.01a1.3 1.3 0 0 0-.182-.164a1.2 1.2 0 0 0-.373-.169h-.002l-.035-.012L13 3.8l-.382-.127l-1.298-.436A5548 5548 0 0 1 3.687.66L2.441.24L2.093.12L2 .091l-.023-.01z' clip-rule='evenodd'/%3E%3C/svg%3E"),
    auto;
}
</style>
