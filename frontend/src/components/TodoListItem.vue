<template>
    <v-list-tile @click="">
        <v-list-tile-action>
            <v-checkbox v-model="item.completed"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title v-text="item.body"></v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    export default {
        props:['id'],
        computed: {
            item() {
                return this.$store.state.Todos.todos[this.id];
            }
        }
    }
</script>