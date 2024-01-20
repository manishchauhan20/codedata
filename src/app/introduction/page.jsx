import React from 'react'
import Cards from './cards'
import Elements from './elements'

const page = () => {
  return (
    <>
      <div>
        <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Introduction</h1>

        <div className='flex flex-col gap-4'>
         <p>
         Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS
         framework featuring dark mode support, a Figma design system, templates, and more.
         </p>
         <p>
         It includes all of the commonly used components that a website requires, 
         such as buttons, dropdowns, navigation bars, modals, but also some more advanced 
         interactive elements such as datepickers.
         </p>
         <p>
         All of the elements are built using the utility classes from Tailwind CSS and vanilla JavaScript with support for TypeScript.
         </p>
         <p>
         Here’s a quick overview of the Flowbite ecosystem including the open source Tailwind components library, the Figma design files, and the pro version.
         </p>
         </div>
         <Cards/>

         <div>
          <div className='flex flex-col gap-5 pt-3'>
           <h1 className='text-2xl font-bold'>Using Flowbite</h1>
           <div className='flex flex-col gap-4'>
           <p>
           One of the disadvantages of Tailwind CSS compared to other frameworks is that it doesn’t have a base set of components. This makes it really hard to quickly prototype a user interface.
           </p>
           <p>
           This is where Flowbite comes into play: it’s basically Tailwind CSS, but you get all of the components that you would normally get with a classic CSS framework like Bootstrap or Bulma
           </p>
           <p>
           There are over 56 types of UI components including buttons, alerts, breadcrumbs, pagination, and navbars. Flowbite also includes some custom JavaScript that enables interactive components, such as dropdowns, modals, tooltips, and many more.
           </p>
           </div>
          </div>
         </div>  

        <Elements/>
          {/* <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold pt-2 flex gap-2 '>
            <SiFlask className='pt-1'/>Licensing
            </h1>
            <p>
            Check out the Flask integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing with a micro framework combined with the UI components from Flowbite
            </p>
            <a href='#'>Learn how to <u className=' text-blue-400'>Install Tailwind CSS with Flask </u></a>
          </div> */}

         </div>
      </div>
    </>
  )
}

export default page