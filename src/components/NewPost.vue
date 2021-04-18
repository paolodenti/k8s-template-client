<template>
    <b-row>
        <b-col>
            <h2>Add a new Post</h2>
            <b-form @submit="onSubmit" @reset="onReset" class="post-form">
                <b-form-input
                    class="form-input"
                    id="title"
                    v-model="form.title"
                    placeholder="Enter post title"
                    required
                ></b-form-input>

                <b-form-textarea
                    class="form-input"
                    id="body"
                    v-model="form.body"
                    placeholder="Enter post body"
                    rows="3"
                    max-rows="6"
                    required
                ></b-form-textarea>

                <b-button class="form-input mr-1" type="submit" variant="primary">Submit</b-button>
                <b-button class="form-input" type="reset" variant="warning">Reset</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import axios from "axios";
import config from "@/utils/config";
import { mutations } from "@/utils/store";

export default {
    data() {
        return {
            form: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            axios
                .post(`${config.restApiUrl}/posts`, this.form)
                .then(function(response) {
                    mutations.addPost(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        onReset(event) {
            event.preventDefault();
            this.form.title = "";
            this.form.body = "";
        }
    }
};
</script>

<style scoped>
.post-form {
    margin: 50px;
}

.form-input {
    margin-bottom: 5px;
}
</style>
