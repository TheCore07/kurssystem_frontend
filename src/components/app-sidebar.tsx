import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { toast } from "sonner";
import { SideBarItems } from "@/components/SideBarItems.ts";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Bell, CircleUserRound, LogOut, User} from "lucide-react";
import {DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator} from "@radix-ui/react-dropdown-menu";
import {useNavigate} from "react-router-dom";

export function AppSidebar() {
    const groups = Array.from(new Set(SideBarItems.map((item) => item.group ?? "Sonstiges")));
    const navigate = useNavigate();

    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                {groups.map((group, index) => (
                    <SidebarGroup key={group} className={index > 0 ? "border-t border-gray-400" : ""}>
                        <SidebarGroupLabel>{group}</SidebarGroupLabel>

                        <SidebarGroupContent>
                            <SidebarMenu className="space-y-1">
                                {SideBarItems.filter((item) => item.group === group).map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.path} className="flex items-center gap-3 text-base ">
                                                <item.icon className="w-5 h-5"/>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-700">
                {/*<SidebarGroupLabel>© {new Date().getFullYear()} FabTheDev</SidebarGroupLabel>*/}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 p-3 h-auto"
                        >
                            <Avatar>
                                <AvatarImage/>
                                <AvatarFallback>
                                    <CircleUserRound className="h-4 w-4"/>
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-medium leading-none">Admin</span>
                                <span className="text-xs text-muted-foreground truncate">
                                        Admin@admin.de
                                </span>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="top" align="start" className="w-56">
                        <DropdownMenuLabel className="flex flex-col">
                            <span>Admin</span>
                            <span className="text-xs text-muted-foreground">Admin@admin.de</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate("/profile")}>
                            <User className="mr-2 h-4 w-4" />
                            Account
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast("This function will be implemented in a later release")}>
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => console.log("logout")}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    )
}