import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IClient } from "./client.model";

@Injectable()
export class ClientService{
    private api: string = 'http://localhost:5200';

    constructor(private httpClient: HttpClient){}

    public addClient(newClient: IClient): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/Client`, newClient);
    };

    public getClient(): Observable<IClient[]>{
        return this.httpClient.get<IClient[]>(`${this.api}/Client`);
    };
}