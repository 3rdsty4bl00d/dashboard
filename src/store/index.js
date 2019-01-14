import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loader: true,
    searchValue: '',
    userEmail: '',
    deleteIcon: '',
    roles: [
      {
        name: 'Admin',
        role: ['CRUD User', 'CRUD Roles']
      },
      {
        name: 'Author',
        role: ['Create Music', 'Update Music']
      },
      {
        name: 'Director',
        role: ['Create Music', 'Delete Music']
      },
      {
        name: 'Singer',
        role: ['Create Music', 'Read Music']
      }
    ],
    songs: [
      {
        artist: 'Ani Choying Dolma',
        album: 'Inner Peace',
        genre: 'Classical',
        year: 2017,
        month: 12,
        day: 7,
        albumImage:
          'https://www.mokshamantra.com/wp-content/uploads/2017/03/intention-mindfulness-meditation.jpg',
        views: 0,
        id: 'asdf4654asdfgskjhsd',
        songName: 'meditation111',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Cho',
        genre: 'Fusion',
        year: 2017,
        month: 11,
        day: 2,
        albumImage:
          'https://cdn1.i-scmp.com/sites/default/files/styles/980x551/public/images/methode/2017/10/24/40e29908-b7a9-11e7-affb-32c8d8b6484e_1280x720_091544.JPG?itok=wfmPU5QX',
        views: 0,
        id: 'asdf4654asdfgskjhsd',
        songName: 'meditation1',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Inner Peace',
        genre: 'Classical',
        year: 2017,
        month: 10,
        day: 24,
        albumImage:
          'https://www.mokshamantra.com/wp-content/uploads/2017/03/intention-mindfulness-meditation.jpg',
        views: 0,
        id: 'asdf46bvdfgs454asd',
        songName: 'meditation2',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Cho',
        genre: 'Fusion',
        year: 2016,
        month: 9,
        day: 17,
        albumImage:
          'https://cdn1.i-scmp.com/sites/default/files/styles/980x551/public/images/methode/2017/10/24/40e29908-b7a9-11e7-affb-32c8d8b6484e_1280x720_091544.JPG?itok=wfmPU5QX',
        views: 0,
        id: 'asdf4654a345dfgsd',
        songName: 'meditation3',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Inner Peace',
        genre: 'Folk',
        year: 2016,
        month: 8,
        day: 5,
        albumImage:
          'https://www.mokshamantra.com/wp-content/uploads/2017/03/intention-mindfulness-meditation.jpg',
        views: 0,
        id: 'asdf4654avbdfssd',
        songName: 'meditation4',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Cho',
        genre: 'Fusion',
        year: 2016,
        month: 3,
        day: 3,
        albumImage:
          'https://cdn1.i-scmp.com/sites/default/files/styles/980x551/public/images/methode/2017/10/24/40e29908-b7a9-11e7-affb-32c8d8b6484e_1280x720_091544.JPG?itok=wfmPU5QX',
        views: 0,
        id: 'asdf46werwvxcv54asd',
        songName: 'meditation5',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Moments Of Bliss',
        genre: 'Folk',
        year: 2019,
        month: 3,
        day: 3,
        albumImage:
          'https://images-na.ssl-images-amazon.com/images/I/514Ppbok9OL._SX355_.jpg',
        views: 0,
        id: 'asdf46werwvxcv54asdasd',
        songName: 'meditation16',
        price: 10
      },
      {
        artist: 'Ani Choying Dolma',
        album: 'Inner Peace',
        genre: 'Folk',
        year: 2015,
        month: 6,
        day: 9,
        albumImage:
          'https://www.mokshamantra.com/wp-content/uploads/2017/03/intention-mindfulness-meditation.jpg',
        views: 0,
        id: 'asnghjghdf4654asd',
        songName: 'meditation6',
        price: 10
      },
      {
        artist: 'Tashi Lama',
        album: 'Tibetan Master Chants',
        genre: 'Folk',
        year: 2015,
        month: 5,
        day: 19,
        albumImage:
          'https://www.yogajournal.com/.image/t_share/MTQ2MTgwNzM5MDQ5OTg5NjY0/sunset-meditation-mudra.jpg',
        views: 0,
        id: 'assdfdf4654asd',
        songName: 'meditation77',
        price: 10
      },
      {
        artist: 'Tashi Lama',
        album: 'Healing Sounds: Frequencies II',
        genre: 'Pop-Rock',
        year: 2015,
        month: 4,
        day: 25,
        albumImage: 'https://i.ytimg.com/vi/7XwWpDT6mJg/maxresdefault.jpg',
        views: 0,
        id: 'asdf4654aqwesd',
        songName: 'meditation8',
        price: 10
      },
      {
        artist: 'Tashi Lama',
        album: 'Tibetan Master Chants',
        genre: 'Folk',
        year: 2018,
        month: 3,
        day: 22,
        albumImage:
          'https://www.yogajournal.com/.image/t_share/MTQ2MTgwNzM5MDQ5OTg5NjY0/sunset-meditation-mudra.jpg',
        views: 0,
        id: 'asdf4654awrtvcbsd',
        songName: 'meditation9',
        price: 10
      },
      {
        artist: 'Tashi Lama',
        album: 'Tibetan Master Chants',
        genre: 'Pop-Rock',
        year: 2018,
        month: 2,
        day: 21,
        albumImage:
          'https://www.yogajournal.com/.image/t_share/MTQ2MTgwNzM5MDQ5OTg5NjY0/sunset-meditation-mudra.jpg',
        views: 0,
        id: 'asdf4654ahjghsd',
        songName: 'meditation11',
        price: 10
      },
      {
        artist: 'Tashi Lama',
        album: 'Healing Sounds: Frequencies II',
        genre: 'Folk',
        year: 2018,
        month: 1,
        day: 13,
        albumImage: 'https://i.ytimg.com/vi/7XwWpDT6mJg/maxresdefault.jpg',
        views: 0,
        id: 'asdf4654arvsdsd',
        songName: 'meditation12',
        price: 10
      },
      {
        artist: 'Tashi Lama',
        album: 'Healing Sounds: Frequencies II',
        genre: 'Folk',
        year: 2019,
        month: 1,
        day: 13,
        albumImage: 'https://i.ytimg.com/vi/7XwWpDT6mJg/maxresdefault.jpg',
        views: 0,
        id: 'asdf4654arvsdsaasdd',
        songName: 'meditation14',
        price: 10
      }
    ],
    users: [
      {
        userEmail: 'shivam@admin',
        userRoles: 'Admin',
        userPassword: 'shivam'
      }
    ]
  },
  mutations: {
    setLoader: (state, payload) => {
      state.loader = payload
    },
    setUserEmail: (state, payload) => {
      state.userEmail = payload
    },
    setDeleteIcon: (state, payload) => {
      state.deleteIcon = payload
    },
    setSearchValue: (state, payload) => {
      state.searchValue = payload
    }
  },
  actions: {
    addSearchValue: ({ commit }, payload) => {
      commit('setSearchValue', payload)
    }
  },
  getters: {
    loader: state => state.loader,
    userEmail: state => state.userEmail,
    roles: state => state.roles,
    users: state => state.users,
    deleteIcon: state => state.deleteIcon,
    songs: state => state.songs,
    searchValue: state => state.searchValue
  }
})
