<template>
    <v-list-tile>
        <v-list-tile-action>
            <v-icon v-if="item.status" @click.stop="handleCheckbox(id)">check_box</v-icon>
            <v-icon v-if="!item.status" @click.stop="handleCheckbox(id)">check_box_outline_blank</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
            <v-icon @click.stop="removeTodo(id)">delete</v-icon>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props:['id'],
        computed: {
            item() {
                return this.$store.state.Todos.todos.find(todo => todo.id === this.id);
            }
        },
        methods: {
            ...mapActions(['removeTodo', 'toggleTodo']),
            handleCheckbox(){
                this.toggleTodo({
                    "id": this.item.id,
                    "title": this.item.title,
                    "status": !this.item.status
                });
            }
        }
    }
</script>