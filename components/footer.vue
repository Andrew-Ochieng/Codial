<template>
    <section>
        <!--call-to-action-->
        <div class="">
            <div class="md:flex justify-around md:space-y-0 space-y-4 text-center items-center text-gray-800 md:py-12 py-8 md:px-16 px-4 bg-sky-300">
                <p class="md:text-3xl text-2xl font-medium">Follow our newsletter for updates</p>
                <div class="flex justify-center mt-6">
                    <div class="bg-white border rounded-md focus-within:ring-2 dark:bg-gray-800 dark:border-gray-600 focus-within:border-blue-400 focus-within:ring-gray-700 focus-within:ring-opacity-40 dark:focus-within:border-gray-600">
                        <div class="flex flex-wrap justify-between md:flex-row">
                            <input type="email" placeholder="Enter your email" aria-label="Enter your email" class="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent"> 
                            <button class="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-md dark:hover:bg-yellow-400 dark:bg-yellow-500 lg:w-auto hover:bg-yellow-400">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>

        <!--footer-->
        <footer class="bg-gray-800 text-white opacity-95 text-center">
            <div class="md:flex justify-around md:px-16 px-8 py-8 md:space-y-0 space-y-4">
                <div class="md:text-left">
                    <h1 class="md:text-3xl text-2xl text-sky-500 font-semibold md:mb-2">Codial Solutions</h1>
                    <p class="md:text-base text-sm ">Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Tenetur, odit.</p>
                    <i class="fa-solid fa-user"></i>
                </div>

                <div class="md:text-left">
                    <h2 class="md:text-2xl text-lg font-medium text-sky-500 mb-2">Contact Us</h2>
                    <ul class="md:text-base text-sm">
                        <li class=" hover:text-sky-400 my-1">
                            <i></i>
                            0710815080/ 0717195986
                        </li>
                        <li class=" hover:text-sky-400 my-1">
                            <i></i>
                            codialsolutions@gmail.com
                        </li>
                        <li class=" hover:text-sky-400 my-1">
                            <i></i>
                            Codial House, Kilimani, Nairobi
                        </li>
                    </ul>
                </div>
                
                <div class="md:text-left">
                    <h2 class="md:text-2xl text-lg font-medium text-sky-500 mb-2">Social Links</h2>
                    <ul class="flex justify-around items-center md:space-x-6">
                        <a href="#" class="flex justify-center items-center my-2">
                            <img class="md:w-6 w-6 " src="../assets/images/whatsapp.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center my-2">
                            <img class="md:w-6 w-6 " src="../assets/images/facebook.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center my-2">
                            <img class="md:w-6 w-6 " src="../assets/images/instagram.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center my-2">
                            <img class="md:w-6 w-6 " src="../assets/images/linkedin.png" alt="">
                        </a>
                    </ul>
                </div>
            </div>
            
            <div class="md:px-16 px-8">
                <hr class="border-white">
            </div>

            <!--copyright-->
            <div class="py-3 md:flex justify-between items-center md:px-16 px-8">
                <div class="">
                    <ul class="flex justify-around md:space-x-8 md:text-sm text-xs ">
                        <li class="hover:text-sky-400 my-1">
                            <a href="#">About</a>
                        </li>
                        <li class="hover:text-sky-400 my-1">
                            <a href="#">Services</a>
                        </li>
                        <li class="hover:text-sky-400 my-1">
                            <a href="#">Projects</a>
                        </li>
                        <li class="hover:text-sky-400 my-1">
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </div>

                <p class="md:text-sm text-xs  md:mt-0 mt-4">© 2022 All RIghts Reserved | <a class="hover:text-sky-500" href="#">Codial Solutions</a></p>
            </div>
        </footer>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>