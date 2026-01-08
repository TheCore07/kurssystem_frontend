import { api } from "./axios";
import type {CompanyType, NewCompanyType} from "@/types/company.type.ts";

export async function getCompanies() {
    return api.get("/companies");
}

export async function createCompany(company: NewCompanyType) {
    return api.post("/companies", company);
}

export async function updateCompany(company: CompanyType) {
    return api.put(`/companies`, company);
}

export async function deleteCompany(id: string) {
    return api.delete(`/companies/${id}`);
}