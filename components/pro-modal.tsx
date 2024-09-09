"use client";

import { Check, Code, ImageIcon, MessageSquare, MusicIcon, VideoIcon, Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

import { UseProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-700",
      bgColor: "bg-violet-700/10",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
    },
    {
      label: "Music Generation",
      icon: MusicIcon,
      color: "text-emerald-700",
      bgColor: "bg-emerald-700/10",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
    }
  ];

export const ProModal = () => {
    const proModal = UseProModal();
    const [loading, setLoading] = useState(false);

    const onSubscripe = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            console.log(error, "CLIENT_ERROR");
        } finally {
            setLoading(false);
        }
        
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex justify-center items-center flex-col gap-y-4 pb-2">
                            Upgrade Your Account
                            <Badge className="uppercase text-sm py-1" variant="premium">Pro</Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool, index) => (
                            <Card
                                key={index}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                <Button disabled={loading} size="lg" variant="premium" className="w-full" onClick={onSubscripe}>
                    enjoy unlimited features
                    <Zap className="w-4 h-4 ml-2 fill-white" />
                </Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}