new Vue({
  el: "#desafio",
  data: {
    nome: "Eliezer de Oliveira Cardoso",
    idade: 38,
    linkImg: "http://files.cod3r.com.br/curso-vue/vue.jpg",
  },
  methods: {
    multiplicaIdade: function () {
      return this.idade * 3;
    },
    ramdom: function () {
      return Math.random();
    },
  },
});
