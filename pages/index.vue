<template>
  <div
    class="h-screen flex items-center justify-center bg-black"
    :class="{
      'bg-green-500': disponibility === 'disponible',
      'bg-red-500': disponibility === 'indisponible',
      'bg-gray-500': disponibility === 'undefined',
    }"
    @click="toggleDisponibility"
  >
    <h1 class="text-white font-mono text-6xl">
      {{ disponibility }}
    </h1>
  </div>
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
</script>

<style></style>
