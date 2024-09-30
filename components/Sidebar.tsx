import { FC, useState, useEffect } from "react";
import { ArrowLeftIcon, Squares2X2Icon, UserGroupIcon, CalendarDaysIcon, BellIcon, BookOpenIcon, MagnifyingGlassCircleIcon, Square3Stack3DIcon, EllipsisVerticalIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import { Button } from "./ui/button";

interface MenuItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  hasNotification?: boolean;
}

interface Menu {
  title: string;
  items: MenuItem[];
}

const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('Mon Hub');

  const handleResize = () => {
    const isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileOrTablet) {
      setIsCollapsed(isMobileOrTablet);
    }
  };

  const menuItems: Menu[] = [
    {
      title: 'Mon espace',
      items: [
        { name: 'Mon Hub', icon: Squares2X2Icon, href: '/hub' },
        { name: 'Mon équipe', icon: UserGroupIcon, href: '/team' },
        { name: 'Agenda', icon: CalendarDaysIcon, href: '/agenda' },
        { name: 'Notifications', icon: BellIcon, href: '/notifications', hasNotification: true },
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

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`h-screen flex flex-col transition-all duration-00 ease-in-out px-4 ${isCollapsed ? "w-20" : "w-60"} bg-gray-uptoo text-white dark:bg-blue-950`}
    >
      <div className="flex items-center py-4 justify-between">
        {
          !isCollapsed &&
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.webp"
              alt="Uptoo Logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          </div>
        }
        <Button
          onClick={toggleSidebar}
          size="icon"
          className={`relative size-6 rounded-full bg-gray-700 hover:bg-gray-600 text-white ${isCollapsed && "mx-auto"}`}
        >
          <ArrowLeftIcon className={`size-7 p-1 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
          {/* <span className="absolute text-[5px] h-[12px] font-thin bg-white right-1 top-0 bottom-0 m-auto">|</span> */}
        </Button>
      </div>

      <div className={`flex items-center justify-between mb-2 ${isCollapsed && "mx-auto"}`}>
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
          <EllipsisVerticalIcon className={`size-6 text-gray-500 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
        )}
      </div>

      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-2 w-full">
          {!isCollapsed && (
            <div className="flex items-center space-x-2 w-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center justify-between p-2 py-2 bg-[#3f414d] hover:bg-[#3f414d] text-white rounded-md shadow-sm w-full dark:bg-blue-900">
                    <div className="flex items-center space-x-2">
                      <span role="img" aria-label="taco" className="text-[22px]">
                        🌮
                      </span>
                      <span>Nom du workspace</span>
                    </div>
                    <ChevronUpDownIcon className="w-5 h-5" />
                  </Button>
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


      {menuItems.map((sectionItem) => (
        <div className="mb-5" key={uuidv4()}>
          {
            !isCollapsed &&
            <div className="text-xs font-bold tracking-wide text-gray-400 uppercase py-1">
              {sectionItem.title}
            </div>
          }
          <ul className="space-y-1">
            {sectionItem.items.map((item) => (
              <li key={uuidv4()}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    activeItem === item.name
                      ? 'bg-activeBlue text-white'
                      : 'text-[#616e7f] hover:bg-[#202126] dark:hover:bg-blue-900'
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span className={`relative ${isCollapsed && "mx-auto"}`}>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    {item.hasNotification && <span className="absolute top-0 right-0 block h-1.5 w-1.5 bg-red-500 ring-1 ring-gray-900 rounded-full" />}
                  </span>
                  {!isCollapsed && <span className="pt-1 font-semibold">{item.name}</span>}
                </Link>
            </li>
            ))}
          </ul>
        </div>
      ))}

      {
        !isCollapsed &&
        <div className="mt-2">
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
