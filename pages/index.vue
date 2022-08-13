<template>
    <div>
        <Navbar />
        <Hero />
        <WorkProcess />
        <Services />
        <ChooseUs />
        <Testimonials />
        <Clients />
        <ReachOut />
        <Footer />
        
    </div>
</template>

<script>
import Navbar from '~~/components/navbar.vue';
import Hero from '~~/components/hero.vue';
import WorkProcess from '../components/workProcess.vue';
import Services from '../components/services.vue';
import ChooseUs from '../components/chooseUs.vue';
import Testimonials from '../components/testimonials.vue';
import Clients from '../components/clients.vue';
import Footer from '../components/footer.vue';

export default {
    components: {
        Navbar,
        Hero,
        WorkProcess,
        Services,
        ChooseUs,
        Testimonials,
        Clients,
        Footer
    }
}


</script>

<style scoped>

</style>