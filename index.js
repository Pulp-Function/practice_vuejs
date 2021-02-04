/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Peter",
    };
  },
  methods: {
    upperName: function () {
      console.log("upperName", this.message, this.name);
      this.name = this.name.toUpperCase();
    },
  },
});
