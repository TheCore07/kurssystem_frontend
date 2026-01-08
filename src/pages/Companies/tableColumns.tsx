import type { ColumnDef } from "@tanstack/react-table";
import type { CompanyType } from "@/types/company.type";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

export const columns = (
    onEdit: (project: CompanyType) => void,
    onDelete: (project: CompanyType) => void
): ColumnDef<CompanyType>[] => [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "address",
        header: "Addresse",
        cell: ({ getValue }) => (
            <div className="truncate max-w-[400px]">
                {getValue<string>()}
            </div>
        )
    },
    {
        accessorKey: "comment",
        header: "Kommentar",
        cell: ({ getValue }) => (
            <div className="truncate max-w-[400px]">
                {getValue<string>()}
            </div>
        )
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const project = row.original;

            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="h-8 w-8 p-0 cursor-pointer"
                            >
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            className="bg-gray-800 text-gray-100 border border-gray-700"
                        >
                            <DropdownMenuLabel>Aktionen</DropdownMenuLabel>

                            <DropdownMenuItem
                                onClick={() => onEdit(project)}
                                className="focus:bg-gray-700 cursor-pointer"
                            >
                                <Pencil className="h-4 w-4 mr-2" />
                                Bearbeiten
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={() => onDelete(project)}
                                className="text-red-400 focus:bg-red-900 cursor-pointer"
                            >
                                <Trash className="h-4 w-4 mr-2" />
                                Löschen
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];