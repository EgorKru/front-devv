"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SettingsIcon, UsersIcon, FolderIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { useProjectId } from "@/features/projects/hooks/use-project-id";

const routes = [
  { label: "Главная", href: "", icon: GoHome, activeIcon: GoHomeFill },
  {
    label: "Мои задачи",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Проекты",
    href: "/projects",
    icon: FolderIcon,
    activeIcon: FolderIcon,
  },
  {
    label: "Настройки",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Участники",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  const projectId = useProjectId();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        // Для главной страницы и проектов используем общие маршруты
        const fullHref = item.href === "" || item.href === "/projects" 
          ? `/dashboard${item.href}` 
          : projectId 
            ? `/projects/${projectId}${item.href}`
            : `/dashboard${item.href}`;
        
        const isActive = pathname === fullHref;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.href} href={fullHref}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
