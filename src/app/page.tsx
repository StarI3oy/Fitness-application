import MainWhenAuthorizedPage from "@/app/MainWhenAuthorizedPage";

export default function Home() {
    let isAuthorized: boolean = true;
    if (isAuthorized)
        return (MainWhenAuthorizedPage())
}