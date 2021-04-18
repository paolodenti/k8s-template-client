<template>
    <div class="text-center" v-if="posts.length">
        <h2>Posts</h2>
        <div>
            <b-row align-v="center" v-bind:key="post.index" v-for="post in posts">
                <b-col cols="11">
                    <b-card v-bind:title="post.title">
                        <b-card-text>
                            {{ post.body }}
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col cols="1">
                    <b-button @click="deletePost(post)" class="form-input" variant="danger">Delete</b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/utils/config";
import { store, mutations } from "@/utils/store";

export default {
    data() {
        return {};
    },
    computed: {
        posts() {
            return store.posts;
        }
    },
    methods: {
        deletePost(post) {
            axios
                .delete(`${config.restApiUrl}/api/posts/${post._id}`)
                .then(() => {
                    mutations.delPost(post);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        axios
            .get(`${config.restApiUrl}/api/posts`)
            .then(response => {
                mutations.setPosts(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>
