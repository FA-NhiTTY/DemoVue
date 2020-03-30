<template>
    <div class="stats">
        <h1>Stats component</h1>
        <p>
            Currently {{countLinks}} links
        </p>

        <button class="btn btn-primary" @click="removeAllLinks">Remove all links</button>
        <p> {{msg}} </p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex' // truy cập đc vào các getters
export default {
    name: 'Stats',
    computed: {
        ...mapGetters([
            'countLinks'
        ])
    },
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        ...mapMutations(['REMOVE_ALL']),
        ...mapActions(['removeAll']),
        removeAllLinks() {
            if(confirm('Are you sure?')) {
                this.removeAll().then(() => {
                    this.msg = 'They have been removed'
                })
            }
        }
    }
}
</script>