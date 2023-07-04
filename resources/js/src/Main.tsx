import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";

export default function Main() {
    return (
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col justify-center items-center gap-y-5">
            <div className="text-2xl">Configured Tailwind CSS and Shadcn</div>
            <div className="flex flex-row gap-x-3">
                <Button>Button</Button>
                <Button variant={"secondary"}>Button</Button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("main-app");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
}
