new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta() {
      alert("Clicou no botão!");
    },
    alteraValor(event) {
      this.valor = event.target.value;
    },
  },
});
