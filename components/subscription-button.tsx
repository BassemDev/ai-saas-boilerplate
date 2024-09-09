"use client";

import axios from "axios";
import { Zap } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

import { Button } from "./ui/button";

interface SubscriptionButtonProps {
    isPremium: boolean;
}

export const SubscriptionButton = ({ isPremium = false}: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);
    
    const handleUpgrade = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Settings Page error", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <Button variant={isPremium ? "default" : "premium"} onClick={handleUpgrade} disabled={loading}>
            {isPremium ? "manage Subscription": "upgrade"}
            {!isPremium && <Zap className="w-4 l-4 ml-2 fill-white"/>}
        </Button>
    )
}