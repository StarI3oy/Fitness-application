"use client"
import MainWhenAuthorizedPage from "@/components/mainComponent";

export default function Home() {
    let isAuthorized: boolean = true;
    if (isAuthorized)
        return (MainWhenAuthorizedPage())
}