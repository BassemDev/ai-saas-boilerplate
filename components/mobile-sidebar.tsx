"use client";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import SideBar from "./sidebar";
import { useEffect, useState } from "react";

interface MobileSideBar {
  apiLimitCount: number;
  isPremium: boolean;
}

export const MobileSidebar = ({ apiLimitCount = 0 , isPremium = false }: MobileSideBar) => {
    const [isMoundted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMoundted) {
        return null;
    }

  return (
    <Sheet>
      <SheetTrigger>
          <MenuIcon className="md:hidden"/>
      </SheetTrigger>
      
      <SheetContent side="left" className="p-0" aria-describedby={undefined}>
      <SheetTitle>
      </SheetTitle>
        <SideBar isPremium={isPremium} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
