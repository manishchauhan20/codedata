import React from 'react'
import { FaAngular, FaReact, FaVuejs } from 'react-icons/fa'
import { SiDjango, SiFlask, SiLaravel, SiNextdotjs, SiNuxtdotjs, SiRubyonrails, SiSvelte } from 'react-icons/si'


const elements = () => {
  return (
    <div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2'>Getting Started</h1>
            <div className='flex flex-col gap-4'>
              <p>
              Flowbite is technically a plugin that can be included into any existing Tailwind CSS project. To get started, you first need to make sure that you have a working Tailwind CSS project installed and that you also have Node and NPM installed on your machine.
              </p>
              
            </div>
         </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <FaReact className='pt-1'/> React.js 
            </h1>
            <p>
            If you’re using React as a front-end library you can also use the components from Flowbite including the interactive ones such as the dropdowns, modals, and tooltips as long as you install Tailwind CSS and Flowbite in an existing project.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with React</u></a>
          </div>
          
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiNextdotjs className='pt-1'/>Next.js
            </h1>
            <p>
            If you’re using React as a front-end library and Next.js as a framework you can also use the components from Flowbite React such as the modals, dropdowns, and navbars to speed up your development time coupled with the utility classes from Tailwind CSS.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Next.js and React.js</u></a>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <FaVuejs className='pt-1'/>Vue.js
            </h1>
            <p>
            The components from Flowbite can also be used any new or existing Vue 3 projects as long as you install Tailwind CSS and Flowbite.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Vue.js</u></a>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiNuxtdotjs className='pt-1'/>Nuxt
            </h1>
            <p>
            If you’re using Vue 3 as a front-end library and Nuxt as a framework you can also use the components from Flowbite Vue such as the modals, dropdowns, and navbars to speed up your development time coupled with the utility classes from Tailwind CSS.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Nuxt </u></a>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiLaravel className='pt-1'/>Laravel
            </h1>
            <p>
            If you’re running a Laravel application you can easily set up Tailwind CSS and Flowbite and start developing user interfaces based on the utility-first classes and components.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Laravel </u></a>
          </div>
           
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiSvelte className='pt-1'/>Svelte
            </h1>
            <p>
            If you’re using a Svelte application you can install a standalone Flowbite Svelte library and start developing modern websites using the components from Flowbite and the utility classes from Tailwind CSS.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Svelte </u></a>
          </div>
          
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <FaAngular className='pt-1'/>Angular
            </h1>
            <p>
            You can read our official guide to learn how to set up a new Angular project together with Tailwind CSS and Flowbite to start building advanced web applications with Google’s framework.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Laravel </u></a>
          </div>
           
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiRubyonrails className='pt-1'/>Ruby on Rails 
            </h1>
            <p>
            If you’re using a Ruby on Rails project you can install Tailwind CSS with Flowbite and start building web pages using the utility-first classes and the interactive UI compnonents.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Ruby on Rails </u></a>
          </div>
          
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiDjango className='pt-1'/>Django
            </h1>
            <p>
            Check out the Django integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing even faster using the UI components from Flowbite.
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Django </u></a>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiFlask className='pt-1'/>Flask
            </h1>
            <p>
            Check out the Flask integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing with a micro framework combined with the UI components from Flowbite
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Flask </u></a>
          </div>

    </div>
  )
}

export default elements