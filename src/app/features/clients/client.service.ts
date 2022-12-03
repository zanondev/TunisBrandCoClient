import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IClient } from "./client.model";

@Injectable({providedIn : "root"})
export class ClientService{
    private api: string = "http://localhost:5000/api";

    constructor(private httpClient: HttpClient){}

    public addClient(newClient: IClient): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/Client`, newClient);
    };

    public getClient(): Observable<IClient[]>{
        return this.httpClient.get<IClient[]>(`${this.api}/Client`);
    };

    
    public deleteClient(cpf:String): Observable<boolean>{
        return this.httpClient.delete<boolean>(`${this.api}/Client/${cpf}`);
    };

    public updateClient(newClient: IClient): Observable<boolean> {
        return this.httpClient.put<boolean>(`${this.api}/Client`, newClient);
    };

}