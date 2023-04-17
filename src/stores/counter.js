import { ref, computed } from "vue";
import { defineStore } from "pinia";

// Podemos usar nuestro gestor de estado tipo vuex o funcional como es este caso
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
