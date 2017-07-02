import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contact: {},
        contacts: [{
            'firstName': 'Kristy',
            'lastName': 'Chung',
            'mobileNo': '099-000-1234',
            'email': 'kristy@vuejs.com',
            'facebook': 'https://facebook.com/kristy',
            'imageUrl': './static/images/kristy.png'
        }]
    },
    getters: {
        contacts: state => state.contacts
    }
})

