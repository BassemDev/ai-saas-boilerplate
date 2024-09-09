"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("ca5f304c-343b-4cd4-8660-23c8743bae8a");
    }, []);

    return null;
}