<template>
    <div>
        <Navbar />
        <Hero />
        <Services />
        <ChooseUs />
        <ReachOut />
        <Clients />
        <Footer />
        
    </div>
</template>

<script>
import Navbar from '~~/components/navbar.vue';
import Hero from '~~/components/hero.vue';
import Services from '../components/services.vue';
import Projects from '../components/chooseUs.vue';
import Clients from '../components/clients.vue';
import Footer from '../components/footer.vue';

export default {
    components: {
        Navbar,
        Hero,
        Services,
        Projects,
        Clients,
        Footer
    }
}


</script>

<style scoped>

</style>