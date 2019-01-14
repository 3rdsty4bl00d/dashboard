<template>
  <v-container>
    <v-layout row>
      <v-flex
        xs12
        sm12
        md12
      >
        <v-card>
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-toolbar>
                  <v-toolbar-title>Users</v-toolbar-title>
                  <v-divider
                    class="mx-2"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog
                    v-model="dialog"
                    max-width="900px"
                    max-height="100%"
                  >
                    <v-btn
                      slot="activator"
                      class="mb-2 py-2 px-2"
                      light
                      round
                      v-if="deleteIcon === 'Admin'"
                    >Add user</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline"> {{ formTitle }} </span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-layout
                            row
                            wrap
                          >
                            <v-flex
                              xs12
                              sm12
                              md12
                            >
                              <v-form
                                ref="form"
                                lazy-validation
                                v-model="valid"
                              >
                                <v-text-field
                                  label="User E-mail"
                                  color="black--text"
                                  type="email"
                                  v-model="editedUser.userEmail"
                                  :rules="emailRules"
                                ></v-text-field>
                                <v-text-field
                                  label="User Password"
                                  color="black--text"
                                  :type="show ? 'text' : 'password'"
                                  :append-icon="show ? 'visibility_off' : 'visibility'"
                                  @click:append="show = !show"
                                  v-model="editedUser.userPassword"
                                  :rules="passwordRules"
                                ></v-text-field>
                                <v-select
                                  :items="allRole"
                                  v-model="editedUser.userRoles"
                                  label="Select"
                                  color="black--text"
                                ></v-select>
                              </v-form>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          round
                          class="mb-4 mx-3"
                          @click="close"
                        >cancel</v-btn>
                        <v-btn
                          round
                          light
                          class="mb-4 mx-3"
                          @click="save"
                        >save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="users"
                  class="elevation-1"
                >
                  <template
                    slot="items"
                    slot-scope="props"
                  >
                    <td class="text-xs-center"> {{ props.item.userEmail }} </td>
                    <td class="text-xs-center"> {{ props.item.userRoles }} </td>
                    <td class="justify-center layout px-0">
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                        v-if="deleteIcon === 'Admin'"
                      >edit</v-icon>
                      <v-icon
                        small
                        class="mr-2"
                        @click="deleteItem(props.item)"
                        v-if="deleteIcon === 'Admin'"
                      >delete</v-icon>
                    </td>
                  </template>
                  <template slot="no-data">
                    <v-alert
                      slot="no-result"
                      :value="true"
                      color="error"
                      icon="warning"
                    >
                      No data available!!!
                      <strong>Click</strong>
                      on 'ADD ITEM' to add users</v-alert>
                  </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    editUserIndex: -1,
    valid: true,
    dialog: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length > 1 || 'Password must be greater than 1'
    ],
    headers: [
      {
        text: 'User Email',
        align: 'center',
        value: 'userEmail'
      },
      {
        text: 'User Role',
        align: 'center',
        value: 'userRoles'
      },
      {
        text: 'User Actions',
        align: 'center',
        value: 'userActions',
        sortable: false
      }
    ],
    editedUser: {
      userEmail: '',
      userRoles: '',
      userPassword: ''
    },
    defaultUser: {
      userEmail: '',
      userRoles: '',
      userPassword: ''
    },
    allRole: [],
    splicing: -1
  }),
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    for (let i = 0; i < this.roles.length; i++) {
      this.allRole.push(this.roles[i].name)
    }
    for (let j = 0; j < this.users.length; j++) {
      for (let i = 0; i < this.roles.length; i++) {
        if (this.users[j].userRoles === this.roles[i].name) {
          ++this.splicing
        }
      }
      if (this.splicing === -1) {
        this.$store.state.users.splice(j, 1)
      }
      this.splicing = -1
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    },
    roles () {
      return this.$store.getters.roles
    },
    formTitle () {
      return this.editUserIndex === -1 ? 'New Item' : 'Edit Item'
    },
    deleteIcon () {
      return this.$store.getters.deleteIcon
    }
  },
  methods: {
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedUser = Object.assign({}, this.defaultUser)
        this.editUserIndex = -1
      }, 300)
    },
    save () {
      if (this.$refs.form.validate()) {
        if (this.editUserIndex > -1) {
          Object.assign(this.$store.state.users[this.editUserIndex], this.editedUser)
        } else {
          this.$store.state.users.push(this.editedUser)
        }
        this.close()
      }
    },
    deleteItem (item) {
      const index = this.users.indexOf(item)
      confirm('Are you sure?') && this.$store.state.users.splice(index, 1)
    },
    editItem (item) {
      this.editUserIndex = this.users.indexOf(item)
      this.editedUser = Object.assign({}, item)
      this.dialog = true
    }
  }
}
</script>

<style scoped>
</style>
