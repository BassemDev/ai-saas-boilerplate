"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./FreeCounter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"]});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: LayoutDashboard,
        href: "/conversations",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/images",
        color: "text-pink-700"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/videos",
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/musics",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/codes",
        color: "text-green-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings"
    }
];

type SideBarProps = {
    apiLimitCount: number;
    isPremium: boolean;
}

const SideBar = ({ apiLimitCount, isPremium }: SideBarProps) => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image 
                            fill
                            alt="logo"
                            src="/logo-1.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Smarty
                    </h1>
                </Link>
                <div className="space-y-1">
                    {
                        routes.map((route, index) => (
                            <Link 
                                href={route.href}
                                key={index}
                                className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                    {route.label}
                                </div>

                            </Link>
                        ))
                    }
                </div>
            </div>
            { !isPremium && <FreeCounter apiLimitCount={apiLimitCount} />}
        </div>
    );
}

export default SideBar;