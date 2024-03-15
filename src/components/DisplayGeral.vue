<template>
  <div class="display">{{ value }}</div>
</template>

<script setup>
const props = defineProps(["value"])
</script>

<style>
.display {
  grid-column: span 4;
  background-color: #0004;

  /* este flex serve pra ajustar o valor que é passado dentro do display (uma conta por ex) */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
}
</style>
