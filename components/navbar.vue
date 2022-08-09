<template>
    <div>

        <div class="bg-sky-300">
            <nav class="container md:px-8 px-4 py-2 mx-auto md:flex justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div class="flex items-center flex-shrink-0">
                        <a href="#!" class="flex items-c12enter">
                            <img src="../assets/images/logo-4.png" alt="Codial Solutions" class="md:h-20 h-14 mr-2 md:pb-3 pb-1">
                            
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
                        <a href="#" class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-900 hover:text-gray-100">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-700 hover:text-gray-100">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-700 hover:text-gray-100">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" class="block mx-2 lg:inline-block font-medium md:text-lg text-gray-700 hover:text-gray-100">
                            Contact
                        </a>
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