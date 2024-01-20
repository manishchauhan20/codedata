import {
  FaAngular,
  FaPhoenixSquadron,
  FaReact,
  FaSymfony,
  FaVuejs,
} from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlineQuickreply,
  MdPerson,
} from "react-icons/md";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import {
  SiAstro,
  SiBlazor,
  SiFlask,
  SiLaravel,
  SiNextdotjs,
  SiQwiklabs,
  SiRemix,
  SiRubyonrails,
  SiSolidity,
  SiSvelte,
} from "react-icons/si";
import { GiBurningMeteor } from "react-icons/gi";
import { RiGatsbyLine } from "react-icons/ri";
import { BiLogoDjango } from "react-icons/bi";

const sidebarItems = [
  {
    type: "heading",
    label: "GETTING STARTED",
  },

  {
    type: "sub-heading",
    label: "Introduction",
    href: "/introduction",
    icon: (
      <MdOutlineDashboard className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    type: "sub-heading",
    label: "Quickstart ",
    href: "/quickstart",
    icon: (
      <MdOutlineQuickreply className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    type: "sub-heading",
    label: "JavaScript",
    href: "/javascript",
    icon: (
      <TbBrandJavascript className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
];

const intoductionLanguage = [
  {
    type: "heading",
    label: "INTEGRATION GUIDES",
  },
  {
    type: "sub-heading",
    label: "React",
    href: "/about",
    icon: (
      <FaReact className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Next.js",
    href: "/Next",
    icon: (
      <SiNextdotjs className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Vue",
    href: "/Vue",
    icon: (
      <TbBrandNextjs className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Nuxt",
    href: "/Nuxt",
    icon: (
      <FaVuejs className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Svelte",
    href: "/Svelte",
    icon: (
      <SiSvelte className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Angular",
    href: "/Angular",
    icon: (
      <FaAngular className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Astro",
    href: "/Svelte",
    icon: (
      <SiAstro className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },

  {
    label: "Remix",
    href: "/Svelte",
    icon: (
      <SiRemix className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Meteor.js",
    href: "/Svelte",
    icon: (
      <GiBurningMeteor className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Gatsby",
    href: "/Svelte",
    icon: (
      <RiGatsbyLine className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Solid.js",
    href: "/Svelte",
    icon: (
      <SiSolidity className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Qwik",
    href: "/Qwik",
    icon: (
      <SiQwiklabs className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Laravel",
    href: "/Laravel",
    icon: (
      <SiLaravel className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Symfony",
    href: "/Symfony",
    icon: (
      <FaSymfony className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Rails",
    href: "/Rails",
    icon: (
      <SiRubyonrails className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Phoenix",
    href: "/Phoenix",
    icon: (
      <FaPhoenixSquadron className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Django",
    href: "/Django",
    icon: (
      <BiLogoDjango className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Flask",
    href: "/Flask",
    icon: (
      <SiFlask className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
  {
    label: "Blazor",
    href: "/blazor",
    icon: (
      <SiBlazor className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-600 font-blod" />
    ),
  },
];

const componentName = [
  {
    type: "heading",
    label: "COMPONENTS",
  },
  {
    label: "Accordion",
    href: "/about",
  },
  {
    label: "Alerts",
    href: "/about",
  },
  {
    label: "Avatar",
    href: "/about",
  },
  {
    label: "Badge",
    href: "/about",
  },
  {
    label: "Banner",
    href: "/about",
  },
  {
    label: "Bottom Navigation",
    href: "/about",
  },
  {
    label: "Breadcrumb",
    href: "/about",
  },
  {
    label: "Buttons",
    href: "/about",
  },
  {
    label: "Button Group",
    href: "/about",
  },
  {
    label: "Card",
    href: "/about",
  },
  {
    label: "Carousel",
    href: "/about",
  },
  {
    label: "Chat Bubble",
    href: "/about",
  },
  {
    label: "Device Mockups",
    href: "/about",
  },
  {
    label: "Drawer",
    href: "/about",
  },
  {
    label: "Dropdowns",
    href: "/about",
  },
  {
    label: "Footer",
    href: "/about",
  },
  {
    label: "Forms",
    href: "/about",
  },
  {
    label: "Gallery",
    href: "/about",
  },
  {
    label: "Indicators",
    href: "/about",
  },
  {
    label: "Jumbotron",
    href: "/about",
  },
  {
    label: "KBD",
    href: "/about",
  },
  {
    label: "List Group",
    href: "/about",
  },
  {
    label: "Mega Menu",
    href: "/about",
  },
  {
    label: "Modal",
    href: "/about",
  },
  {
    label: "Navbar",
    href: "/about",
  },
  {
    label: "Pagination",
    href: "/about",
  },
  {
    label: "Popover",
    href: "/about",
  },
  {
    label: "Progress",
    href: "/about",
  },
  {
    label: "Rating",
    href: "/about",
  },
  {
    label: "Sidebar",
    href: "/about",
  },
  {
    label: "Skeleton",
    href: "/about",
  },
  {
    label: "Speed Dial",
    href: "/about",
  },
  {
    label: "Spinner",
    href: "/about",
  },
  {
    label: "Stepper",
    href: "/about",
  },
  {
    label: "Tables",
    href: "/about",
  },
  {
    label: "Tabs",
    href: "/about",
  },
  {
    label: "TimeLine",
    href: "/about",
  },
  {
    label: "Toast",
    href: "/about",
  },
  {
    label: "Tooltips",
    href: "/about",
  },
  {
    label: "Typography",
    href: "/about",
  },
  {
    label: "Video",
    href: "/about",
  },
];

const formComponent = [
  {
    type: "heading",
    label: "FORMS",
  },
  {
    label: "Input Field",
    href: "",
  },
  {
    label: "File Input",
    hraf: "",
  },
  {
    label: "Search Input",
    hraf: "",
  },
  {
    label: "Number Input",
    hraf: "",
  },
  {
    label: "Phone Input",
    hraf: "",
  },
  {
    label: "Select",
    hraf: "",
  },
  {
    label: "Textarea",
    hraf: "",
  },
  {
    label: "CheckBox",
    hraf: "",
  },
  {
    label: "Radio",
    hraf: "",
  },
  {
    label: "Toggle",
    hraf: "",
  },
  {
    label: "Range",
    hraf: "",
  },
  {
    label: "Floating Label",
    hraf: "",
  },
];
export { sidebarItems, intoductionLanguage, componentName, formComponent };
