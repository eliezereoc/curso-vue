<template>
  <dic class="contador">
    <span> {{ cont }} </span>
    <button @click="subtrair">-</button>
    <button @click="adicionar">+</button>
  </dic>
</template>

<script>
export default {
  name: "MeuContador",
  data() {
    return {
      cont: 0,
    };
  },
  methods: {
    adicionar() {
      this.cont++;
    },
    subtrair() {
      this.cont--;
    },
  },
};
</script>

<style>
.contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}
.contador button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>
