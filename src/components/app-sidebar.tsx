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
import { SideBarItems } from "@/components/SideBarItems.ts";

export function AppSidebar() {
    const groups = Array.from(new Set(SideBarItems.map((item) => item.group ?? "Sonstiges")));

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

            <SidebarFooter className="text-xs text-muted-foreground p-3">
                <SidebarGroupLabel>© {new Date().getFullYear()} Core Management</SidebarGroupLabel>
            </SidebarFooter>
        </Sidebar>
    )
}