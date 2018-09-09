<template>
    <v-chip>
        <v-avatar> {{this.count}}</v-avatar>
        pending
    </v-chip>
</template>

<script>
    export default {
        computed: {
            count() {
                return this.$store.state.Todos.todos.filter(todo => todo.status === false).length;
            }
        }
    }
</script>
