import { FC, useState } from "react";
import { 
  Squares2X2Icon,
  UserGroupIcon,
  CalendarDaysIcon,
  BellIcon,
  BookOpenIcon,
  MagnifyingGlassCircleIcon,
  Square3Stack3DIcon,
  EllipsisVerticalIcon,
  ChevronUpDownIcon,
  ArrowLongLeftIcon
} from '@heroicons/react/24/solid';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link"; // Pour les liens externes
import ThemeSelector from "./ThemeSelector";

interface MenuItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

interface Menu {
  title: string;
  items: MenuItem[];
}

const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('Mon Hub');

  const menuItems: Menu[] = [
    {
      title: 'Mon espace',
      items: [
        { name: 'Mon Hub', icon: Squares2X2Icon, href: '/hub' },
        { name: 'Mon équipe', icon: UserGroupIcon, href: '/team' },
        { name: 'Agenda', icon: CalendarDaysIcon, href: '/agenda' },
        { name: 'Notifications', icon: BellIcon, href: '/notifications' },
        { name: 'Ressources', icon: BookOpenIcon, href: '/resources' },
      ]
    },
    {
      title: 'Mes produits',
      items: [
        { name: 'Recrutements', icon: MagnifyingGlassCircleIcon, href: '/recruitments' },
        { name: 'Tous nos produits', icon: Square3Stack3DIcon, href: '/products' },
      ]
    },
  ];  

  // Fonction pour rétracter la sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div
      className={`h-screen flex flex-col transition-all duration-300 ease-in-out px-4 ${isCollapsed ? "w-20" : "w-64"} bg-gray-900 text-white`}
    >
      {/* Header Section */}
      <div className="flex items-center py-4 justify-between">
        {
          !isCollapsed &&
          <div className="flex items-center space-x-2">
            {/* Image placeholder */}
              <Image
                src="/images/logo.png" // Remplacer par le chemin réel de l'image de profil
                alt="Uptoo Logo"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
          </div>
        }
        {/* Bouton pour rétracter */}
        <button
          onClick={toggleSidebar}
          className={`rounded-full bg-gray-700 hover:bg-gray-600 text-white ${isCollapsed && "mx-auto"}`}
        >
          <ArrowLongLeftIcon className={`size-7 p-1 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* User Info */}
      <div className={`flex items-center justify-between mb-2 ${isCollapsed && "mx-auto"}`}>
        {/* Image de profil */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar>
              <AvatarImage src="/images/user-profile.webp" alt="Avatar" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-md font-semibold">Rémy Dubois</h2>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <EllipsisVerticalIcon className={`size-7 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
        )}
      </div>

      {/* Workspace Selector */}
      <div className="flex items-center mb-4 ">
        <div className="flex items-center space-x-2 w-full">
          {!isCollapsed && (
            <div className="flex items-center space-x-2 w-full">
              {/* Texte et dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 pl-4 pr-2 py-2 bg-gray-800 text-white rounded-md shadow-sm justify-between w-full">
                    <span className="mr-2">
                      <span role="img" aria-label="taco" className="text-2xl mr-2">
                        🌮
                      </span>
                      Nom du workspace
                    </span>
                    <ChevronUpDownIcon className="h-5 w-5 pr-0" />
                  </button>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent className="bg-gray-800 text-white p-2 rounded-md shadow-lg">
                  <DropdownMenuItem>Workspace 1</DropdownMenuItem>
                  <DropdownMenuItem>Workspace 2</DropdownMenuItem>
                  <DropdownMenuItem>Workspace 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      {menuItems.map((sectionItem) => (
        <div className="mb-4">
          {
            !isCollapsed &&
            <div className="text-xs font-bold tracking-wide text-gray-400 uppercase py-2">
              {sectionItem.title}
            </div>
          }

          <ul className="space-y-2">
            {sectionItem.items.map((item) => (
              <li key={item.name}>
              <a
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                  activeItem === item.name
                    ? 'bg-activeBlue text-white'
                    : 'text-sidebarText hover:bg-gray-800'
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {/* Ajout de flex et items-center pour l'icône */}
                <span className="flex items-center justify-center">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {!isCollapsed && <span className="pt-1">{item.name}</span>}
              </a>
            </li>
            ))}
          </ul>
        </div>
      ))}

      {
        !isCollapsed &&
        <div className="mt-4">
          <h3 className="text-gray-400 text-xs font-semibold uppercase mb-2">THÈME</h3>
          <ThemeSelector />

        <Link href="#" className="text-sm dark:text-gray-400 text-gray-600 underline">
          {!isCollapsed && "Un problème ?"}
        </Link>
      </div>
      }
    </div>
  );
};

export default Sidebar;
