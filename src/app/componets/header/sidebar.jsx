// Sidebar.js
import React from 'react';

const Sidebar = ({ items ,intoduction ,newitems ,formsItems }) => {
  
  return (
    <>
    <div className=''>
    <ul>

      {items.map((item, index) => (
        <li key={index}>
            <a href={item.href} className={`flex items-center p-2 ${item.type === "heading" ? "text-black" : "text-gray-600"}  rounded-lg dark:text-white hover:bg-gray-100  group`}>
            {item.icon}
           <span className="ms-3">{item.label}</span>
          </a>
        </li>
      ))}
      
    </ul>
    <ul className='py-5'>
   {intoduction.map((item, index) => (
    <li key={index}>
      <a href={item.href} className={`flex items-center p-2 ${item.type === "heading" ? "text-black" : "text-gray-600"}  rounded-lg dark:text-white hover:bg-gray-100  group`}>
      {item.icon}
     {/* {item.icon === 'js' && <MdPerson className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />} */}
      <span className="ms-3">{item.label}</span>
    </a>
  </li>
   ))}

</ul>

<ul className='py-5'>
   {newitems.map((item, index) => (
    <li key={index}>
      <a href={item.href} className={`flex items-center p-2 ${item.type === "heading" ? "text-black" : "text-gray-600"}  rounded-lg dark:text-white hover:bg-gray-100  group`}>
      {item.icon}
      <span className="ms-3">{item.label}</span>
    </a>
  </li>
   ))}

</ul>

<ul className='py-5'>
   {formsItems.map((item, index) => (
    <li key={index}>
      <a href={item.href} className={`flex items-center p-2 ${item.type === "heading" ? "text-black" : "text-gray-600"}  rounded-lg dark:text-white hover:bg-gray-100  group`}>
      {item.icon}
      <span className="ms-3">{item.label}</span>
    </a>
  </li>
   ))}

</ul>
</div>
    </>
  );
};

export default Sidebar;
