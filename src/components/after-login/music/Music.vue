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
                  <v-toolbar-title>
                    Music
                  </v-toolbar-title>
                  <v-divider
                    class="mx-2"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-autocomplete
                    color="black--text"
                    label="Search for existing albums"
                    clearable
                    class="mr-5"
                    v-model="albumSearch"
                    :items="albumSearchAuto"
                    :search-input.sync="search"
                    v-on:keyup.enter="navigateToMusicAlbum"
                  ></v-autocomplete>
                  <v-dialog
                    v-model="dialog"
                    max-width="900px"
                    max-height="100%"
                  >
                    <v-btn
                      round
                      light
                      slot="activator"
                      class="mb-2 py-2 px-2"
                    >Add Music</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline"> {{ formTitle }} </span>
                      </v-card-title>
                      <v-card-title>
                        <span class="title">Date: {{ date }} </span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-layout
                            row
                            wrap
                          >
                            <v-flex
                              xs12
                              sm8
                              md8
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
                                <v-checkbox
                                  label="Featured"
                                  value="true"
                                ></v-checkbox>
                              </v-form>
                            </v-flex>
                            <v-flex
                              xs12
                              sm4
                              md4
                            >
                              <v-card
                                width="80%"
                                class="ml-5 mt-4"
                                height="45%"
                              >
                                <v-container fluid>
                                  <v-layout
                                    row
                                    wrap
                                  >
                                    <v-flex xs12>
                                      <v-img :src="editMusic.albumImage"></v-img>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-card>
                              <v-card
                                width="80%"
                                class="ml-5 mt-4"
                                height="45%"
                              >
                                <v-container fluid>
                                  <v-layout
                                    row
                                    wrap
                                  >
                                    <v-flex xs12>
                                      <v-btn
                                        round
                                        light
                                        slot="activator"
                                        class="mb-2 py-4 px-4 mx-4 mt-5"
                                      >Upload File</v-btn>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-card>
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
                  <v-dialog
                    v-model="dialog1"
                    max-width="900px"
                    max-height="100%"
                  >
                    <v-btn
                      slot="activator"
                      class="mb-2 py-2 px-2"
                      light
                      round
                    >Add to existing</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline"> Add To Existing </span>
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
                              <v-select
                                label="Existing Album"
                                :items="albumSearchAuto"
                                v-model="editMusic.album"
                              ></v-select>
                              <v-text-field
                                label="Song Name"
                                color="black--text"
                                type="text"
                                v-model="editMusic.songName"
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
                              <v-container fluid>
                                <v-layout
                                  row
                                  wrap
                                >
                                  <v-flex xs12>
                                    <v-btn
                                      round
                                      light
                                      slot="activator"
                                      class="mb-2 py-4 px-4 mx-4 mt-5"
                                    >Upload File</v-btn>
                                  </v-flex>
                                </v-layout>
                              </v-container>
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
                          @click="saveAdd"
                        >save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="songs"
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
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                      >edit</v-icon>
                      <v-icon
                        small
                        class="mr-2"
                        @click="deleteItem(props.item)"
                        v-if="deleteIcon = 'Director'"
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
    editedMusicIndex: -1,
    search: '',
    dialog: false,
    dialog1: false,
    albumSearch: '',
    albumSearchAuto: [],
    genreSelect: [],
    valid: true,
    date: new Date().toISOString().substr(0, 10),
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
    },
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
    oddAlbum: 0
  }),
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    close () {
      this.dialog = false
      this.dialog1 = false
      setTimeout(() => {
        this.editMusic = Object.assign({}, this.defaultUser)
        this.editedMusicIndex = -1
      }, 300)
    },
    save () {
      if (this.editedMusicIndex > -1) {
        Object.assign(this.$store.state.songs[this.editedMusicIndex], this.editMusic)
      } else {
        this.$store.state.songs.push(this.editMusic)
      }
      this.close()
      this.albumSearchAuto.push(this.editMusic.album)
      for (let i = 0; i < this.albumSearchAuto.length; i++) {
        for (let j = 0; j < this.songs.length; j++) {
          if (this.albumSearchAuto[i] === this.songs[i].album) {
            ++this.oddAlbum
          }
        }
        if (this.oddAlbum === 0) {
          this.albumSearchAuto.splice(i, 1)
        }
        this.oddAlbum = 0
      }
    },
    saveAdd () {
      for (let i = 0; i < this.songs.length; i++) {
        if (this.songs[i].album === this.editMusic.album) {
          this.editMusic.artist = this.songs[i].artist
          this.editMusic.albumImage = this.songs[i].albumImage
        }
      }
      console.log(this.editMusic)
      this.save()
    },
    deleteItem (item) {
      const index = this.songs.indexOf(item)
      confirm('Are you sure?') && this.$store.state.songs.splice(index, 1)
    },
    editItem (item) {
      this.editedMusicIndex = this.songs.indexOf(item)
      this.editMusic = Object.assign({}, item)
      this.dialog = true
    },
    navigateToMusicAlbum () {
      this.$store.dispatch('addSearchValue', this.search)
      this.$router.push('/musicAlbum')
    }
  },
  created () {
    for (let i = 0; i < this.songs.length; i++) {
      this.genreSelect.push(this.songs[i].genre)
    }
    for (let i = 0; i < this.songs.length; i++) {
      this.albumSearchAuto.push(this.songs[i].album)
    }
  },
  computed: {
    formTitle () {
      return this.editedMusicIndex === -1 ? 'New Music' : 'Edit Music'
    },
    songs () {
      return this.$store.getters.songs
    },
    deleteIcon () {
      return this.$store.getters.deleteIcon
    }
  }
}
</script>

<style>
</style>
