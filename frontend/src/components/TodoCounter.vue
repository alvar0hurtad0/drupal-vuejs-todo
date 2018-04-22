<template>
    <v-chip>
        <v-avatar> {{this.count}}</v-avatar>
        Pendientes
    </v-chip>
</template>

<script>
    export default {
        computed: {
            count() {
                return this.$store.state.Todos.todos.filter(todo => todo.completed === false).length;
            }
        }
    }
</script>