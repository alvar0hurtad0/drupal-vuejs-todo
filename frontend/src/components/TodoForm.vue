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

        computed: {
            items() {
                return this.$store.state.Todos.todos;
            }
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
                // Get the number os current elements as ID for the new element.
                const todoId = this.items.length;
                const todoBody = this.text;
                this.addTodo({
                    "id": todoId,
                    "body": todoBody
                });

                // Reset the input text on the interface.
                this.text = '';
            }
        }

    }
</script>