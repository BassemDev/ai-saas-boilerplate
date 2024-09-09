import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

type DashboardLayoutProps = {
    children: React.ReactNode
}

const DashboardLAyout = async ({children}: DashboardLayoutProps) => {

    const apiLimitCount = await getApiLimitCount();
    const isPremium = await checkSubscription();
    
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
    const isPremium = await checkSubscription();
                <SideBar isPremium={isPremium} apiLimitCount={apiLimitCount} />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLAyout;