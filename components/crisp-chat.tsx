"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        // todo : Add the key of crisp here
        Crisp.configure("YOUR_KEY");
    }, []);

    return null;
}