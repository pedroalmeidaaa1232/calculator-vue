<template>
  <div class="calculator">
    <DisplayGeral :value="state.displayValue" />
    <ButtonGeral label="AC" triple @customClick="state.clearMemory" />
    <ButtonGeral label="/" operation @customClick="state.setOperation" />
    <ButtonGeral label="7" @customClick="state.addDigit" />
    <ButtonGeral label="8" @customClick="state.addDigit" />
    <ButtonGeral label="9" @customClick="state.addDigit" />
    <ButtonGeral label="*" operation @customClick="state.setOperation" />
    <ButtonGeral label="4" @customClick="state.addDigit" />
    <ButtonGeral label="5" @customClick="state.addDigit" />
    <ButtonGeral label="6" @customClick="state.addDigit" />
    <ButtonGeral label="-" operation @customClick="state.setOperation" />
    <ButtonGeral label="1" @customClick="state.addDigit" />
    <ButtonGeral label="2" @customClick="state.addDigit" />
    <ButtonGeral label="3" @customClick="state.addDigit" />
    <ButtonGeral label="+" operation @customClick="state.setOperation" />
    <ButtonGeral label="0" double @customClick="state.addDigit" />
    <ButtonGeral label="." @customClick="state.addDigit" />
    <ButtonGeral label="=" operation @customClick="state.setOperation" />
  </div>
</template>

<script setup>
import ButtonGeral from "@/components/ButtonGeral.vue"
import DisplayGeral from "@/components/DisplayGeral.vue"
import { useCalculatorStore } from "@/stores/calculatorStore";

const state = useCalculatorStore()

</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
