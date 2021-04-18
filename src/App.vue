<template>
    <b-container id="app">
        <h1>Rest API Test Client</h1>

        <new-post />
        <posts />
    </b-container>
</template>

<script>
import NewPost from "./components/NewPost.vue";
import Posts from "./components/Posts.vue";

export default {
    name: "App",
    components: {
        NewPost,
        Posts
    }
};
</script>
