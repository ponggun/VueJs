<template>
    <div class="ui four stackable cards">
        <carditem v-for="a in items" :item="a" :key="a.id"> </carditem>
    </div>
</template>
<script>
/* eslint-disable */
import carditem from '@/components/CardItem'

export default {
    name: 'cardlist',
    components: { carditem },
    props: ['items']
}
</script>
