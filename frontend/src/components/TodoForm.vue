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
                // Calculate todoId depending on last element's ID.
                let todoId;
                if (this.items.length == 0) {
                    todoId = 0;
                }
                else {
                    const lastElementId = this.items[this.items.length -1 ].id;
                     todoId = lastElementId + 1;
                }

                const todoBody = this.text;
                this.addTodo({
                    "id": todoId,
                    "title": todoBody
                });

                // Reset the input text on the interface.
                this.text = '';
            }
        }

    }
</script>