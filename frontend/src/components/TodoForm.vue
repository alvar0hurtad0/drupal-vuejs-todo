<template>
    <v-layout>
        <v-text-field
            :value="text"
            @input="inputHandler"
            @keyup.enter="sendHandler"
        />
        <v-btn flat icon @click.stop="sendHandler">
            <v-icon>check</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
    import { mapActions } from 'vuex';


    export default {
        data() {
            return {
                text: '',
            };
        },

        methods: {
            ...mapActions(['addTodo']),

            inputHandler(input) {
                this.text = input;
            },
            sendHandler() {
                // Doesn't make sense send a empty todo.
                if (!this.text.length) {
                    return;
                }
                const todoBody = this.text;
                this.addTodo(todoBody);
                this.text = '';
            }
        }

    }
</script>