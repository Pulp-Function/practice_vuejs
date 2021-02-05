/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello to my todo app!",
      todos: [],
      newTodoTitle: "Sample title",
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
    createTodo: function () {
      console.log("createTodo");
      var params = {
        userId: 1,
        title: this.newTodoTitle,
        completed: false,
      };
      axios.post("https://jsonplaceholder.typicode.com/todos", params).then((response) => {
        console.log("post", response);
        this.todos.push(response.data);
        this.newTodoTitle = "";
      });
    },
  },
});
