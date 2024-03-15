import { defineStore } from "pinia"

export const useCalculatorStore = defineStore({
  id: "calculator",
  state: () => ({
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
    initial: {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    },
  }),

  //Métodos functions
  actions: {
    clearMemory() {
      Object.assign(this, this.initial) //copia o initial e enfia-o no state
    },

    setOperation(operation) {
      if(this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clearDisplay = true //limpar numero anterior do display ao add novo num
      } else {
        const equals = operation === "="
        const currentOperation = this.operation //calcular a operação anterior

        try {
          //fazer operação com os dois indices, após isso, injetar no primeiro indice o resultado
          this.values[0] = eval(`"use strict"; ${this.values[0]} ${currentOperation} ${this.values[1]}`)
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory()
          return
          }

        } catch(e) {
          this.$emit('onError', e)
        }

        //zerar indice 1 (pra ficar disponivel pra nova operação)
        this.values[1] = 0

        //injetar resultado da operação no this.displayValue
        this.displayValue = this.values[0]

        //se a operaçao for "equals" retorna null (não há mais nenhuma operaçao a ser feita), se não retorna a operação que o user escolher
        this.operation = equals ? null : operation

        this.current = equals ? 0 : 1

        //caso operação nao seja um "=", limpar display (no proximo numero adicionado)
        this.clearDisplay = !equals
      }
    },

    addDigit(number) {
      //caso ja tenha o ponto, apenas retornar
      if(number === "." && this.displayValue.includes(".")) { 
        return
      }

      const clearDisplay = this.displayValue === '0'
        || this.clearDisplay //clear display se variável ta setada TRUE

      //se o clearDisplay for true, meter "", se não, mostrar valor do display
      const currentValue = clearDisplay ? "" : this.displayValue 

      //o valor novo adicionado pelo user + o currentValue (valor guardado) = resultado final
      const finalResultDisplay = currentValue + number

      //resultado final será adicionado ao displayValue do state
      this.displayValue = finalResultDisplay

      //ao digitar novo numero
      this.clearDisplay = false

      //vai adicionar o resultado final ao índice corrente do array values
      this.values[this.current] = finalResultDisplay

    },
  },
})
 