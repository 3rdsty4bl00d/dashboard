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
                  <v-toolbar-title> {{ searchValue }} </v-toolbar-title>
                  <v-divider
                    class="mx-2"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-toolbar-title> {{ total() }} songs in this album</v-toolbar-title>
                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="songHere"
                  class="elevation-1"
                >
                  <template
                    slot="items"
                    slot-scope="props"
                  >
                    <td class="text-xs-center"> {{ props.item.songName }} </td>
                    <td class="text-xs-center"> {{ props.item.album }} </td>
                    <td class="text-xs-center"> {{ props.item.artist }} </td>
                    <td class="text-xs-center"> {{ props.item.genre }} </td>
                    <td class="text-xs-center"> {{ props.item.price }} </td>
                    <td class="justify-center layout px-0">
                      <v-dialog
                        v-model="dialog"
                        max-width="900px"
                        max-height="100%"
                      >
                        <v-icon
                          small
                          class="mr-2"
                          slot="activator"
                          @click="editItem(props.item)"
                        >edit</v-icon>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Edit Music</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container fluid>
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
                                      label="Album Name"
                                      color="black--text"
                                      type="text"
                                      v-model="editMusic.album"
                                    ></v-text-field>
                                    <v-text-field
                                      label="Artist Name"
                                      color="black--text"
                                      type="text"
                                      v-model="editMusic.artist"
                                    ></v-text-field>
                                    <v-text-field
                                      label="Song Name"
                                      color="black--text"
                                      type="text"
                                      v-model="editMusic.songName"
                                    ></v-text-field>
                                    <v-text-field
                                      label="Input image source"
                                      color="black--text"
                                      type="text"
                                      v-model="editMusic.albumImage"
                                    ></v-text-field>
                                    <v-select
                                      label="Genre"
                                      :items="genreSelect"
                                      color="black--text"
                                      v-model="editMusic.genre"
                                    ></v-select>
                                    <v-text-field
                                      label="Price (Rs)"
                                      color="black--text"
                                      type="number"
                                      v-model="editMusic.price"
                                    ></v-text-field>
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
                      <v-icon
                        small
                        class="mr-2"
                        @click="deleteItem(props.item)"
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
    songsTotal: 0,
    editedMusicIndex: -1,
    headers: [
      {
        text: 'Song Name',
        align: 'center',
        value: 'songName'
      },
      {
        text: 'Album Name',
        align: 'center',
        value: 'album'
      },
      {
        text: 'Artist Name',
        align: 'center',
        value: 'artist'
      },
      {
        text: 'Genre',
        align: 'center',
        value: 'genre'
      },
      {
        text: 'Price',
        align: 'center',
        value: 'price'
      },
      {
        text: 'User Actions',
        align: 'center',
        value: 'userActions',
        sortable: false
      }
    ],
    dialog: false,
    songHere: [],
    editMusic: {
      artist: '',
      album: '',
      genre: '',
      year: new Date().toISOString().substr(0, 4),
      month: new Date().toISOString().substr(5, 2),
      day: new Date().toISOString().substr(8, 2),
      albumImage: '',
      views: 0,
      id: '',
      songName: '',
      price: 0
    },
    defaultUser: {
      artist: '',
      album: '',
      genre: '',
      year: new Date().toISOString().substr(0, 4),
      month: new Date().toISOString().substr(5, 2),
      day: new Date().toISOString().substr(8, 2),
      albumImage: '',
      views: 0,
      id: '',
      songName: '',
      price: 0
    }
  }),
  computed: {
    searchValue () {
      return this.$store.getters.searchValue
    },
    songs () {
      return this.$store.getters.songs
    },
    deleteIcon () {
      return this.$store.getters.deleteIcon
    }
  },
  created () {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.searchValue === this.songs[i].album) {
        this.songHere.push(this.songs[i])
      }
    }
  },
  methods: {
    save () {
      if (this.editedMusicIndex > -1) {
        Object.assign(this.$store.state.songs[this.editedMusicIndex], this.editMusic)
      } else {
        this.$store.state.songs.push(this.editMusic)
      }
      this.close()
    },
    close () {
      this.dialog = false
      this.dialog1 = false
      setTimeout(() => {
        this.editMusic = Object.assign({}, this.defaultUser)
        this.editedMusicIndex = -1
      }, 300)
    },
    total () {
      this.songsTotal = 0
      for (let i = 0; i < this.songs.length; i++) {
        if (this.searchValue === this.songs[i].album) {
          ++this.songsTotal
        }
      }
      return this.songsTotal
    },
    deleteItem (item) {
      const index = this.songs.indexOf(item)
      confirm('Are you sure?') && this.$store.state.songs.splice(index, 1)
    },
    editItem (item) {
      this.editedMusicIndex = this.songs.indexOf(item)
      this.editMusic = Object.assign({}, item)
      this.dialog = true
    }
  }
}
</script>

<style>
</style>
