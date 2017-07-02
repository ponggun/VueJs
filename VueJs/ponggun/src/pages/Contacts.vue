<template>
    <div class="ui center aligned segment">
        <searchpanel></searchpanel>
        <datapager></datapager>
        <div class="ui center aligned segment">
            <cardlist :items="items"></cardlist>
        </div>
    </div>
</template>
<script>
/* eslint-disable */

import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'
import contactsStore from '@/stores/Contacts'

export default {
    name: 'contacts',
    components: { searchpanel, datapager, cardlist },
    mounted() {
        this.items = contactsStore.getters.contacts
    },
    data() {
        return {
            items: []
        }
    }
}
</script>
