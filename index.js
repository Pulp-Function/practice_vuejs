/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Peter",
      newFruit: "",
      fruits: ["apple", "banana", "cantaloupe"],
    };
  },
  methods: {
    upperName: function () {
      console.log("upperName", this.message, this.name);
      this.name = this.name.toUpperCase();
    },
    addFruit: function () {
      console.log(this.newFruit);
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});
