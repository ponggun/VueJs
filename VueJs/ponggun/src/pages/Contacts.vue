<template>
    <div class="ui center aligned segment">
        <searchpanel @onClickedAdd="onClickedAdd()"></searchpanel>
        <datapager></datapager>
        <div class="ui center aligned segment">
            <cardlist :items="items"></cardlist>
        </div>
        <contactEditor id="modalEditor"></contactEditor>
    </div>
</template>
<script>
/* eslint-disable */

import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'
import contactsStore from '@/stores/Contacts'
import contactEditor from '@/components/ContactEditor'
import $ from 'jquery'

export default {
    name: 'contacts',
    components: { searchpanel, datapager, cardlist, contactEditor },
    mounted() {
        this.items = contactsStore.getters.contacts
    },
    methods:{
        onClickedAdd(){
            $('#' + contactEditor.modalId).show();
        }
    },
    data() {
        return {
            items: []
        }
    }
}
</script>
