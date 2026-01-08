import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar/>
                <Toaster/>

                <main className="flex flex-col flex-1 p-6">
                    {/* Header */}
                    <div className="mb-4">
                        <SidebarTrigger/>
                    </div>

                    {/* Page Content */}
                    <div className="flex-1 overflow-auto">
                        <Outlet/>
                    </div>
                </main>
            </div>
        </SidebarProvider>
    )
}