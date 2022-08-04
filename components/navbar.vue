<template>
    <div>

        <div class="bg-sky-300">
            <nav class="container md:px-12 px-6 md:py-3 py-4 mx-auto md:flex justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div class="flex items-center flex-shrink-0">
                        <a href="#!" class="flex items-center">
                            <img src="../assets/images/codial-logo.png" alt="Codial Solutions" class="md:h-20 h-10 mr-2 md:pb-3 pb-1">
                        </a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex justify-center gap-4">
                        <!-- menu-bar-btn -->
                        <div @click="showMenu = !showMenu" class="flex md:hidden justify-center gap-4">
                            <button
                                type="button"
                                class="text-gray-900 hover:text-sky-900 focus:outline-none focus:text-sky-900">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path
                                    fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <ul
                    :class="showMenu ? 'flex' : 'hidden'"
                    class="flex-col mt-8 space-y-2 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <li>
                        <NuxtLink
                            to="/" 
                            class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-900 hover:text-gray-100">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/about" 
                            class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-700 hover:text-gray-100">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/services" 
                            class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-700 hover:text-gray-100">
                            Services
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/contact" 
                            class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-700 hover:text-gray-100">
                            Contact
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                showMenu: false,
            }
        },

    //     methods: {
    //         toggleNav: function () {
    //             this.showMenu = !this.showMenu;
    //         },
    // },

    }
</script>

<style scoped>

</style>