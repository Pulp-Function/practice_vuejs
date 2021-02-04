/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: null,
      number2: null,
      number3: null,
      totalSum: null,
    };
  },
  methods: {
    calculate: function () {
      console.log("calculate", this.number1);
      this.totalSum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
  },
});
