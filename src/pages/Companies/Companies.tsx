import {deleteCompany, getCompanies, createCompany, updateCompany} from "@/api/company.api.ts";
import type {CompanyType, NewCompanyType} from "@/types/company.type.ts";
import {useEffect, useState} from "react";
import {BookUser, Plus} from "lucide-react";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/pages/Companies/tableColumns.tsx";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function Companies() {
    const [companies, setCompanies] = useState<CompanyType[]>([]);
    const [selected, setSelected] = useState<CompanyType | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const [newCompany, setNewCompany] = useState<NewCompanyType>({
        name: "",
        address: "",
        comment: "",
    })

    const tableColumns = columns(
        (company) => openEdit(company),
        (company) => handleDelete(company.id)
    );

    const openEdit = (c: CompanyType) => {
        setSelected(c);
        setIsEditOpen(true);
    }

    const closeEdit = () => {
        setSelected(null)
        setIsEditOpen(false);
    }


    const handleCreate = async () => {
        const res = await createCompany(newCompany);

        if (res.status === 200 || res.status === 201) {
            await loadCompanies();
        }
    }


    const loadCompanies= async () => {
        const res = await getCompanies();
        const data = res.data;
        setCompanies(data);
    }

    const handleDelete = async (id: string) => {
        const res = await deleteCompany(id);

        if (res.status === 200 || res.status === 201) {
            await loadCompanies();
        }
    }

    const updateProject = async (company: CompanyType) => {
        const res = await updateCompany(company);

        if (res.status === 200 || res.status === 201) {
            await loadCompanies();
        }
    }

    useEffect(() => {
        loadCompanies();
    }, [])

    const filteredData = Array.isArray(companies)
        ? companies.filter(company =>
            company.name.toLowerCase().includes(search.toLowerCase()) ||
            company.address.toLowerCase().includes(search.toLowerCase()) ||
            company.comment.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    return (
        <>
            {/* Create Dialog */}
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogContent className="sm:max-w-[450px] bg-gray-800 text-gray-100 border border-gray-700 rounded-xl shadow-lg">
                    <form className="grid gap-4" onSubmit={handleCreate}>
                        <DialogHeader>
                            <DialogTitle>Neues Firma</DialogTitle>
                            <DialogDescription>
                                Lege eine neue Firma an.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-3">
                            <Label htmlFor="title">Name</Label>
                            <Input
                                id="name"
                                value={newCompany.name}
                                onChange={(e) =>
                                    setNewCompany({...newCompany, name: e.target.value})
                                }
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="description">Addresse</Label>
                            <Input
                                id="address"
                                value={newCompany.address}
                                onChange={(e) =>
                                    setNewCompany({...newCompany, address: e.target.value})
                                }
                                placeholder="Addresse"
                                required
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="description">Kommentar</Label>
                            <Input
                                id="address"
                                value={newCompany.comment}
                                onChange={(e) =>
                                    setNewCompany({...newCompany, comment: e.target.value})
                                }
                                placeholder="Kommentar"
                                required
                            />
                        </div>

                        <DialogFooter className="mt-2">
                            <DialogClose asChild>
                                <Button variant="default"
                                        className="bg-red-500 hover:bg-red-600 hover:text-white cursor-pointer">Abbrechen</Button>
                            </DialogClose>
                            <Button type="submit"
                                    className="bg-green-500 hover:bg-green-600 cursor-pointer">Erstellen</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>


            <Dialog open={isEditOpen} onOpenChange={closeEdit}>
                <DialogContent className="bg-gray-800 text-gray-100 border border-gray-700 rounded-xl">
                    {selected && (
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                await updateProject(selected);
                                await loadCompanies();
                                closeEdit();
                            }}
                            className="grid gap-4"
                        >
                            <DialogHeader>
                                <DialogTitle>Firma bearbeiten</DialogTitle>
                                <DialogDescription>Bearbeiten Sie diese Firma</DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-3">
                                <Label>Name</Label>
                                <Input
                                    id="title"
                                    value={selected.name}
                                    onChange={(e) =>
                                        setSelected({...selected, name: e.target.value})
                                    }
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label>Addresse</Label>
                                <Input
                                    id="description"
                                    value={selected.address}
                                    onChange={(e) =>
                                        setSelected({...selected, address: e.target.value})
                                    }
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label>Kommentar</Label>
                                <Input
                                    id="description"
                                    value={selected.comment}
                                    onChange={(e) =>
                                        setSelected({...selected, comment: e.target.value})
                                    }
                                />
                            </div>

                            <DialogFooter>
                                <DialogClose
                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg cursor-pointer">
                                    Abbrechen
                                </DialogClose>
                                <Button
                                    type="submit"
                                    className="bg-green-600 hover:bg-green-700 cursor-pointer"
                                >
                                    Speichern
                                </Button>
                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>


            {/* Page Layout */}
            <div className="flex flex-col h-full bg-gray-900 text-gray-100 p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <BookUser className="h-8 w-8 text-indigo-400"/>
                        <h1 className="text-2xl font-semibold">Firmen</h1>
                    </div>
                </div>

                {/* FILTER + TABLE */}
                <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-lg space-y-4">
                    {/* Search Input */}
                    <div className="flex gap-3">
                        <Input
                            type="text"
                            placeholder="Suchen..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <Button
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 cursor-pointer"
                            onClick={() => setIsCreateOpen(true)}
                        >
                            <Plus className="h-5 w-5" />
                            Neu
                        </Button>
                    </div>

                    {/* DataTable */}
                    <DataTable columns={tableColumns} data={filteredData} />
                </div>
            </div>
        </>
    );
}