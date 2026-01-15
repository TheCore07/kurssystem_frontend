import {Users} from "lucide-react";
// import {Input} from "@/components/ui/input.tsx";
// import {Button} from "@/components/ui/button.tsx";
// import {DataTable} from "@/components/data-table.tsx";

export default function Participants() {
    return (
        <div className="flex flex-col h-full bg-gray-900 text-gray-100 p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-indigo-400"/>
                    <h1 className="text-2xl font-semibold">Teilnehmer</h1>
                </div>
            </div>

            {/* FILTER + TABLE */}
            <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-lg space-y-4">
                {/* Search Input */}
                <div className="flex gap-3">
                    {/*<Input*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Suchen..."*/}
                    {/*    value={search}*/}
                    {/*    onChange={(e) => setSearch(e.target.value)}*/}
                    {/*    className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"*/}
                    {/*/>*/}
                    {/*<Button*/}
                    {/*    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 cursor-pointer"*/}
                    {/*    onClick={() => setIsCreateOpen(true)}*/}
                    {/*>*/}
                    {/*    <Plus className="h-5 w-5"/>*/}
                    {/*    Neu*/}
                    {/*</Button>*/}
                </div>

                {/* DataTable */}
                {/*<DataTable columns={tableColumns} data={filteredData}/>*/}
            </div>
        </div>
    )
}