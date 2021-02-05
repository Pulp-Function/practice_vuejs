/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello to my todo app!",
      todos: [],
    };
  },
  created: function () {
    this.loadTodos();
  },
  methods: {
    loadTodos: function () {
      console.log("loadTodos");
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response);
        this.todos = response.data;
      });
    },
  },
});
