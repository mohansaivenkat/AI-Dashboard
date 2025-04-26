import React from 'react'

const Footer = () => {
    return (
        <div>




            <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Made by  <span class="font-semibold text-blue-700 dark:text-blue-400">Mohan Sai Venkat</span> using
                    <span class="font-semibold text-blue-700 dark:text-blue-400"> ReactJS</span>,
                    <span class="font-semibold text-blue-700 dark:text-blue-400">Tailwind CSS</span> and
                    <span class="font-semibold text-blue-700 dark:text-blue-400"> framer-motion</span>.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="mailto:mohansaivenkat2004@gmail.com" class="hover:underline me-4 md:me-6">Email</a>
                    </li>
                    <li>
                        <a href="https://github.com/mohansaivenkat" target="_blank" class="hover:underline me-4 md:me-6">GitHub</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/mohan-sai-venkat" target="_blank" class="hover:underline">LinkedIn</a>
                    </li>
                </ul>
            </footer>


        </div>
    )
}

export default Footer
