<template>
  <div>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<script>
import request from './utils/request.js';

export default {
  data() {
    return {
      books: []
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await request.get("/getAll");
        this.books = response.data;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  },
  mounted() {
    this.fetchBooks();
  }
};
</script>
