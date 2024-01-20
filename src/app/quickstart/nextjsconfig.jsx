import React from 'react'
import CopyTextComponent from './copyTextComponent'
import Elements from '../introduction/elements'

const nextjsconfig = () => {
  return (
    <div>
        <div className='flex flex-col gap-4'>
        <h1 className="font-bold text-2xl"> NPM Next Js</h1>
        <div className="flex flex-col gap-4">
              <p>
             1. We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:
              </p>
              <pre className="bg-blue-50 flex justify-between text-blue-700 p-4 h-auto mr-4 rounded-lg">
                <code>npx create-next-app@latest</code>
                <div>
                  <CopyTextComponent />
                </div>
              </pre>
            </div>
            <div className="flex flex-col gap-4">
              <p>
               2. On installation, you will see the following prompts:
                
              </p>
              <pre className="bg-blue-50 max-w-[auto] overflow-x-auto  flex justify-between text-blue-700 pl-4 h-auto p-4 mr-4 rounded-lg">
                <code className="language-javascript">
                  {`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use "src/"" directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`}
                </code>
                <div className=''>
                  <CopyTextComponent />
                </div>
              </pre>
            </div>
           
            <h1 className="font-bold text-2xl">Manual Installation </h1>

            <div className="flex flex-col gap-4">
              <p>
                 To manually create a new Next.js app, install the required packages:
                
              </p>
              <pre className="bg-blue-50 max-w-[auto] overflow-x-auto  flex justify-between text-blue-700 pl-4 h-auto p-4 mr-4 rounded-lg">
                <code className="language-javascript">
                  {`
npm install next@latest react@latest react-dom@latest
`}
                </code>
                <div className=''>
                  <CopyTextComponent />
                </div>
              </pre>
            </div>

            <div className="flex flex-col gap-4">
              <p>
                 Open your <b>Package.json</b> file and add the following <b>scripts</b>:
                
              </p>
              <pre className="bg-blue-50 max-w-[auto] overflow-x-auto  flex justify-between text-blue-700 pl-4 h-auto p-4 mr-4 rounded-lg">
                <code className="language-javascript">
                  {`
{
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    }
  }
`}
                </code>
                <div className=''>
                  <CopyTextComponent />
                </div>
              </pre>
            </div>

            <Elements/>
        </div>   
      
    </div>
  )
}

export default nextjsconfig