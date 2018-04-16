<template>
    <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
            <v-list-tile-action>
                <v-checkbox v-model="item.completed"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title v-text="item.body"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            items() {
                return this.$store.state.todos;
            }
        }
    }
</script>