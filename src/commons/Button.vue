<template>
  <button @click="handleClick" :style="createButtonStyles()">
    {{ props.label }}
  </button>
</template>

<script setup>
// Uso de los estados en pinia
import { useCounterStore } from "@/stores/counter";

// Referencia al estado de Pinia
const counter = useCounterStore();

// Definimos las propiedades que va a recibir el componente
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
});

// Definimos los eventos que va a emitir el componente
const emits = defineEmits({
  onClick: null,
});

// Función para cuando se haga click en el botón
const handleClick = (event) => {
  // Emitimos el evento onClick con la información del evento, y el color
  counter.increment();
  emits("onClick", event, props.color);
};

// Retornamos los estilos de manera dinámica usando las props
const createButtonStyles = () => {
  return {
    color: props.color ? props.color : "black",
  };
};
</script>

<style scoped></style>
