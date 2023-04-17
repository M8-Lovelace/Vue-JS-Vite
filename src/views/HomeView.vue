<template>
  <!-- Mostrar el valor de doubleCount de pinia -->
  <span>{{ counter.doubleCount }}</span>
  <!-- Implementación del componente Button con sus props y emits -->
  <Button @onClick="clickButton" label="Home View" color="red"></Button>
</template>

<script setup>
// Importación del componente común Button
import { useCounterStore } from "@/stores/counter";
// Uso de los estados en pinia
import Button from "@/commons/Button.vue";

// Referencia al estado de Pinia
const counter = useCounterStore();

// Función que recibe la emisión del evento onClick del componente Button
const clickButton = (event, color) => {
  console.log(event);
  console.log(color);
};
</script>
