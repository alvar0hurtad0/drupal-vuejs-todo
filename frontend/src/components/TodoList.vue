<template>
    <v-list>
        <todo-list-item v-for="item in items" :key="item.id" v-bind:id="item.id" />
    </v-list>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import TodoListItem from './TodoListItem';

    export default {
        components: {
            'todo-list-item': TodoListItem,
        },
        methods: {
            ...mapActions(['getTodos', 'getToken']),
        },
        computed: {
            items() {
                return this.$store.state.Todos.todos;
            }
        },
        mounted() {
            this.getToken();
            this.getTodos();
        },
    }
</script>