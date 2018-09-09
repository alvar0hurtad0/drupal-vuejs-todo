<template>
    <v-layout row wrap>
        <v-flex xs12>
            <todo-form></todo-form>
        </v-flex>
        <v-flex xs12>
            <v-list>
                <todo-list-item v-for="item in items" :key="item.id" v-bind:id="item.id" />
            </v-list>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapActions } from 'vuex';
    import TodoListItem from './TodoListItem';
    import TodoForm  from './TodoForm';

    export default {
        components: {
            TodoForm,
            'todo-list-item': TodoListItem,
            'todo-form': TodoForm,
        },
        methods: {
            ...mapActions('Todos', ['getTodos']),
        },
        computed: {
            items() {
                return this.$store.state.Todos.todos;
            }
        },
        mounted() {
            this.getTodos();
        },
    }
</script>