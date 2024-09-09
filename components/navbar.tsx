import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar =  async () => {
    const apiLimit = await getApiLimitCount();
    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimit} />
            <div className="flex w-full justify-end">
                <UserButton />
            </div>
        </div>
    )
}

export default Navbar;