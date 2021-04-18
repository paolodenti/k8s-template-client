import Vue from "vue";

export const store = Vue.observable({
    posts: []
});

export const mutations = {
    setPosts(posts) {
        store.posts.push(...posts);
    },
    addPost(post) {
        store.posts.unshift(post);
    },
    delPost(post) {
        const index = store.posts.findIndex(elem => elem._id === post._id);
        if (index > -1) {
            store.posts.splice(index, 1);
        }
    }
};
