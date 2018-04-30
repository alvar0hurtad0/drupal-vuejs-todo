<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn color="primary" dark slot="activator">Login</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">Login</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field
                                    label="username"
                                    required
                                    @input="usernameInputHandler"
                                    @keyup.enter="sendHandler"/>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                    label="Password"
                                    type="password"
                                    required
                                    @input="passwordInputHandler"
                                    @keyup.enter="sendHandler"
                                />
                            </v-flex>
                            <v-flex xs12 sm6>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false" value="username">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.stop="sendHandler" value="password">OK</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data () {
            return {
                dialog: false,
                password: '',
                username: ''
            }
        },
        methods: {
            ...mapActions(['getToken', 'getTodos']),

            usernameInputHandler(input) {
                this.username = input;
            },

            passwordInputHandler(input) {
                this.password = input;
            },

            sendHandler() {
                this.getToken({
                    username: this.username,
                    password: this.password
                });
                this.dialog = false;
                this.getTodos();
            }
        }
    }
</script>
