import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
    const isUserPremium = await checkSubscription();

    return (
        <div>
            <Heading 
                title="Settings"
                description="Manage your account"
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    { isUserPremium ? "you are currently on a Premium plan." : "You are currently on a Free plan." }
                </div>
                <SubscriptionButton isPremium={isUserPremium} />
            </div>

        </div>
    )
}

export default SettingsPage;