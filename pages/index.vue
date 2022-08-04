<template>
    <div>
        <Navbar />
        <Hero />
        
    </div>
</template>

<script>
import Navbar from '~~/components/navbar.vue';
import Hero from '~~/components/hero.vue';

    export default {
    components: { 
        Navbar,
        Hero,
    }
}
</script>

<style scoped>

</style>