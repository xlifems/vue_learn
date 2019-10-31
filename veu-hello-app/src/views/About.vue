<template>
  <div class="about">
    <div v-for="post of posts" v-bind:key="post.id">
      <h4>{{ post.title}}</h4>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
const URI = "https://jsonplaceholder.typicode.com/posts";
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await fetch(URI);
      const data = await response.json();
      console.log(data);
      this.posts = data;
    }
  }
};
</script>
