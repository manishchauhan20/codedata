"use client";
import React, { useEffect } from "react";

import CopyTextComponent from "./copyTextComponent";
import Nextjsconfig from "./nextjsconfig";
const Page = () => {
  useEffect(() => {
    // Include the Prism.js library for syntax highlighting
    const prismScript = document.createElement("script");
    prismScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js";
    document.head.appendChild(prismScript);

    const autoloaderScript = document.createElement("script");
    autoloaderScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js";
    document.head.appendChild(autoloaderScript);

    return () => {
      // Clean up script elements when the component unmounts
      document.head.removeChild(prismScript);
      document.head.removeChild(autoloaderScript);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 h-auto border-b-2">
          <h1 className=" font-bold text-2xl">Quickstart</h1>
          <p className=" pb-6">
            Get started with Flowbite by including it into your project using
            NPM or CDN.
          </p>
        </div>
        <div className="">
          <p>
            Flowbite is a library of components built on top of the
            utility-classes from Tailwind CSS and it also includes a JavaScript
            file that makes interactive elements works, such as modals,
            dropdowns, and more. Learn how to get started by following this
            quickstart guide.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className=" text-2xl font-bold">Getting started</h1>
          <p>
            Flowbite can be easily integrated into your project through NPM. It
            functions as a plugin for Tailwind CSS and offers both a data
            attributes interface and a JavaScript API for powering interactive
            UI components.
          </p>
        </div>

        <div className="md:flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Require via NPM</h1>
          <p>
            Make sure that you have
            <a href="https://nodejs.org/en/">
              <u className="text-blue-400">Node.js</u>
            </a>
            and
            <a hraf="https://tailwindcss.com/">
              <u className=" text-blue-400">Tailwind CSS</u>
            </a>
            installed.
          </p>
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {/* <span className="mr-2">{copied ? 'Copied!' : ''}</span> */}
              <p>
                1. Install Tailwind CSS
                following command:
              </p>
              <pre className="bg-blue-50  flex justify-between text-blue-700 p-4 h-auto mr-4 rounded-lg">
                <code>
                  npm install -D tailwindcss
                  <br />
                  npx tailwindcss init
                </code>
                <div>
                  <CopyTextComponent />
                </div>
              </pre>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                2. Configure your template paths
                <u className="text-blue-500">tailwind.config.js</u> file:
              </p>
              <pre className="bg-blue-50 flex overflow-x-auto justify-between text-blue-700 pl-4 md:h-auto p-4 mr-4 rounded-lg">
                <code className="language-javascript" data-lang="javascript">
{` module.exports ={
    plugins: [
      require('flowbite/plugin')
    ]
      };
`}
                </code>
                <div className="">
                  <CopyTextComponent />
                </div>
              </pre>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                3. Add the Tailwind directives to your CSS
                <u className="text-blue-500">src/input.js</u> file:
              </p>
              <pre className="bg-blue-50 overflow-x-auto flex justify-between text-blue-700 pl-4  mr-4 md:h-auto p-4  rounded-lg">
                <code className="language-javascript">
{`@tailwind base;
@tailwind components;
@tailwind utilities;
`}
                </code>
                <div className="">
                  <CopyTextComponent />
                </div>
              </pre>
            </div>

            <div className="flex flex-col gap-4">
              <p>
                4. Start the Tailwind CLI build process
                <u className="text-blue-500">Terminal</u> file:
              </p>
              <pre className="bg-blue-50 overflow-x-auto flex justify-between text-blue-700 pl-4  mr-4 md:h-auto p-4  rounded-lg">
                <code className="language-javascript">
{`
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
`}
                </code>
                <div className="">
                  <CopyTextComponent />
                </div>
              </pre>
            </div>

            <div className="flex flex-col gap-4">
              <p>
                5. Start using Tailwind in your HTML
                <u className="text-blue-500">src/index.html</u> file:
              </p>
              <pre className="bg-blue-50 overflow-x-auto flex justify-between text-blue-700 pl-4  mr-4 md:h-auto p-4  rounded-lg">
                <code className="language-javascript">
{`
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
`}
                </code>
                <div className="">
                  <CopyTextComponent />
                </div>
              </pre>
            </div>

          </div>
          <Nextjsconfig />
        </div>
      </div>
    </>
  );
};

export default Page;
