<template>
    <div>
        <!--reach-out-->
        <div class="md:m-12 m-6 md:flex justify-between">
            <div>
                <h3 class="text-center uppercase">We Are Ready</h3>
                <h1 class="my-3 text-center text-sky-400 md:text-3xl text-2xl font-semibold uppercase">Talk to you 24/7</h1>
                <form action="" method="post">
                    <div class="my-4">
                        <input class="w-full pl-1 pr-4 py-3 border-b-2 border-sky-300 outline-none" type="text" id="full-name" placeholder="Full Name">
                    </div>
                    <div class="my-4">
                        <input class="w-full pl-1 pr-4 py-3 border-b-2 border-sky-300 outline-none" type="text" id="project-details" placeholder="Project Details">
                    </div>

                    <div class="md:flex justify-between md:space-x-8">
                        <div class="my-4">
                            <input class="w-full pl-1 pr-4 py-3 border-b-2 border-sky-300 outline-none" type="email" id="email" placeholder="Email">
                        </div>
                        <div class="my-4">
                            <input class="w-full pl-1 pr-4 py-3 border-b-2 border-sky-300 outline-none" type="number" id="phone-number" placeholder="Phone Number">
                        </div>
                    </div>
                    <button class="md:px-8 md:py-3 px-4 py-2 mt-2 md:text-lg text-md bg-sky-400 rounded-full text-white" type="submit">
                        Send
                    </button>
                </form>
            </div>

            <div class="md:w-2/3">
                <img src="../assets/images/hero.webp" alt="">
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>