import React from "react";
import Textarea from "../commoncomponets/textarea";

const hearding = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl "> Tailwind CSS JavaScript </h1>
        <p className="border-b-2 pb-8">
          Learn how to set up a Tailwind CSS project with the JavaScript from
          Flowbite and start working with the interactive UI components based on
          the Flowbite API and data attributes interface
        </p>
        <div className="flex flex-col gap-5">
          <p>
            <u>JavaScript</u> is one of the most popular programming languages
            in the world, basically powering the client side of nearly 98%
            percent of all websites alongside HTML and CSS. It is a high-level
            language which uses dynamic typing and supports features such as
            object orientation, first-class functions and the web based API
            allows you access to the DOM (Document Object Model).
          </p>
          <p>
            Flowbite uses JavaScript to power the interactivity of the more
            complex UI components such as datepickers, dropdowns, and modals
            while also leveraging the utility classes from Tailwind CSS.
          </p>

          <p>
            There are two main ways you can use JavaScript to power the
            interactive UI components:
          </p>
          <div className="">
            <ol className="flex flex-col gap-5 text-gray-500">
              <li>
                Use the data attributes interface and include the Flowbite
                JavaScript via NPM or CDN.
              </li>
              <li>
                Programmatically create instances of the UI components and call
                methods and attach events to elements.
              </li>
            </ol>
          </div>

          <p>
            On this page you will learn how to leverage the Flowbite API to work
            with the interactivity part of the UI library and how you can
            customize the default behaviour of the UI components using
            JavaScript.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl"> API </h1>
          
          <p>
            Flowbite is written in JavaScript with optional support for
            TypeScript and provides an extensive API for the interactive UI
            components that you use by creating new instances of the objects,
            setting them up with various options, calling methods such as to
            show or hide a component and even access a global instance manager
            to get access to the initialised objects.
          </p>

          <p>
            Each component page on the documentation has a section called
            “JavaScript Behaviour” that documents how you can create and manage
            an object such as a Modal, Carousel, Dropdown, or any other
            interactive UI components that requires JavaScript to function.
          </p>

          <div className="">
            <p>
              Here is an extensive example on how you can work with the Modal
              component:
            </p>

            <Textarea
              codeContent={`
// set the modal menu element
   const $targetEl = document.getElementById('modalEl');
              
// options with default values
   const options = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
         closable: true,
         onHide: () => {
             console.log('modal is hidden');
          },
         onShow: () => {
             console.log('modal is shown');
          },
         onToggle: () => {
             console.log('modal has been toggled');
        },
 };
              `}
            />

          </div>

          <h1 className="">Create a new Modal object based on the options above.</h1>
          <div className="">
          <Textarea
              codeContent={`
  import { Modal } from 'flowbite';
  /*
  * $targetEl: required
  * options: optional
  */
  const modal = new Modal($targetEl, options);
              `}
            />
          </div>

          <h1>Use the <u className="text-blue-400">show</u> and <u className="text-blue-400">hide</u> methods to show and hide the modal component directly from JavaScript.</h1>
          <div className="">
          <Textarea codeContent={
            ` // show the modal
 modal.show();

 // hide the modal
 modal.hide(); `
          }/>
          </div>

          <h1>Use the <u className="text-blue-400">toggle</u> method to toggle the visibility of the modal.</h1>
          <div className="">
            <Textarea codeContent={
               `
  // toggle the modal
  modal.toggle();
              `
            }/>
          </div>

          <h1>Use the <u className="text-blue-400">isHidden</u> or <u className="text-blue-400">isVisible</u> method to check if the modal is visible or not.</h1>
          <div className="">
            <Textarea codeContent={
              `
  // true if hidden
  modal.isHidden();

  // true if visible
  modal.isVisible();              
              `
            }/>
          </div>
          <h1>Please take into consideration that for this example you also need to have the appropriate HTML markup available on the page where the JS is loaded:</h1>
          <div className="">
            <Textarea codeContent={
              `
<div id="modalEl" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
              `
            }/>
          </div>
        </div>
      </div>
    </>
  );
};

export default hearding;
