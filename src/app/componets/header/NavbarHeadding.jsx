import React from 'react'

const NavbarHeadding = () => {
  return (
    <div>
         <ul id="flowbiteMenu" class="flex-col hidden pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
        <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
          <a href="/quickstart" class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Quickstart</a>
        </li>
        <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
          <a href="/blocks/" class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Blocks</a>
        </li>
        <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
          <a href="/figma/" class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Figma</a>
        </li>
        <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
          <a href="/icons/" class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Icons</a>
        </li>
        <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
          <a href="/blog/" class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Blog</a>
        </li>
        <li class="hidden mb-3 lg:px-2 xl:px-2 lg:mb-0 xl:block">
          <a href="/pro/" class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Pro version</a>
        </li>
         </ul>
               
    </div>
  )
}

export default NavbarHeadding