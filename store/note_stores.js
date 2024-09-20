import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    // 儲存狀態的各個變數
    todos: [
      {
        id: 1,
        title: "寫code啊",
        content: "我不要嗚嗚嗚",
        isFinished: false,
        isPinned: false,
      },
      {
        id: 2,
        title: "掃地了喔",
        content: "好啦好啦",
        isFinished: true,
        isPinned: false,
      },
      {
        id: 3,
        title: "我想回家",
        content: "門在那",
        isFinished: false,
        isPinned: false,
      },
      {
        id: 4,
        title: "游泳",
        content: "一週三次",
        isFinished: true,
        isPinned: false,
      },
      {
        id: 5,
        title: "吃晚餐",
        content: "吃什麼",
        isFinished: false,
        isPinned: true,
      },
    ],
  }),
  getters: {
    // 需要被讀取的資料函式
    completedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },
  actions: {
    // 變更資料狀態的函式區
    addTodo(title, content) {
      if (title.length == 0) return;
      this.todos.push({
        id: Math.floor(Math.random() * 100000),
        title,
        content,
        isFinished: false,
        isPinned: false,
      });
      // title = "";
      // content = "";
    },
    toggleTodo(id) {
      const index = this.todos.findIndex((v) => v.id === id);
      this.todos[index].isFinished = !this.todos[index].isFinished;
    },
    pinTodo(id) {
      const index = this.todos.findIndex((v) => v.id === id);
      this.todos[index].isPinned = !this.todos[index].isPinned;
    },
    deleteTodo(id) {
      const index = this.todos.findIndex((v) => v.id === id);
      this.todos[index].splice(index, 1);
    },
  },
});
