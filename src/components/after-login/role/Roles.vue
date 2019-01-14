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
            <v-layout
              row
              wrap
            >
              <v-flex xs12>
                <v-toolbar>
                  <v-toolbar-title>Roles</v-toolbar-title>
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
                    >Add Roles</v-btn>
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
                                  label="Role"
                                  type="text"
                                  color="black--text"
                                  v-model="editedRoles.name"
                                ></v-text-field>
                                <v-checkbox
                                  label="Create Music"
                                  type="text"
                                  v-model="createMusic"
                                  value="Create Music"
                                ></v-checkbox>
                                <v-checkbox
                                  label="Read Music"
                                  type="text"
                                  v-model="readMusic"
                                  value="Read Music"
                                ></v-checkbox>
                                <v-checkbox
                                  label="Update Music"
                                  type="text"
                                  v-model="updateMusic"
                                  value="Update Music"
                                ></v-checkbox>
                                <v-checkbox
                                  label="Delete Music"
                                  type="text"
                                  v-model="deleteMusic"
                                  value="Delete Music"
                                ></v-checkbox>
                                <v-checkbox
                                  label="CRUD User"
                                  type="text"
                                  v-model="crudUser"
                                  value="CRUD User"
                                ></v-checkbox>
                                <v-checkbox
                                  label="CRUD Roles"
                                  type="text"
                                  v-model="crudRoles"
                                  value="CRUD Roles"
                                ></v-checkbox>
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
                  :items="roles"
                  class="elevation-1"
                >
                  <template
                    slot="items"
                    slot-scope="props"
                  >
                    <td class="text-xs-center"> {{ props.item.name }} </td>
                    <td class="text-xs-center">
                      <ul
                        v-for="(rol, i) in props.item.role"
                        :key="rol"
                      >
                        <li>
                          {{ props.item.role[i] }}
                        </li>
                      </ul>
                    </td>
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
    editRolesIndex: -1,
    createMusic: '',
    readMusic: '',
    updateMusic: '',
    deleteMusic: '',
    crudUser: '',
    crudRoles: '',
    valid: true,
    editedRoles: {
      name: '',
      role: []
    },
    defaultRoles: {
      name: '',
      role: []
    },
    headers: [
      {
        text: 'Role',
        align: 'center',
        value: 'userEmail'
      },
      {
        text: 'User Roles',
        align: 'center',
        value: 'roles'
      },
      {
        text: 'User Actions',
        align: 'center',
        value: 'userActions',
        sortable: false
      }
    ]
  }),
  computed: {
    formTitle () {
      return this.editRolesIndex === -1 ? 'New Roles' : 'Edit Roles'
    },
    roles () {
      return this.$store.getters.roles
    },
    deleteIcon () {
      return this.$store.getters.deleteIcon
    }
  },
  methods: {
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedRoles = Object.assign({}, this.defaultRoles)
        this.editRolesIndex = -1
      }, 300)
    },
    save () {
      if (this.editRolesIndex > -1) {
        Object.assign(this.$store.state.roles[this.editRolesIndex], this.editedRoles)
      } else {
        if (this.createMusic) {
          this.editedRoles.role.push(this.createMusic)
        }
        if (this.readMusic) {
          this.editedRoles.role.push(this.readMusic)
        }
        if (this.updateMusic) {
          this.editedRoles.role.push(this.updateMusic)
        }
        if (this.deleteMusic) {
          this.editedRoles.role.push(this.deleteMusic)
        }
        if (this.crudUser) {
          this.editedRoles.role.push(this.crudUser)
        }
        if (this.crudRoles) {
          this.editedRoles.role.push(this.crudRoles)
        }
        this.$store.state.roles.push(this.editedRoles)
      }
      this.close()
    },
    deleteItem (item) {
      const index = this.roles.indexOf(item)
      confirm('Are you sure?') && this.$store.state.roles.splice(index, 1)
    },
    editItem (item) {
      this.editRolesIndex = this.roles.indexOf(item)
      this.editedRoles = Object.assign({}, item)
      this.dialog = true
    }
  }
}
</script>

<style>
</style>
