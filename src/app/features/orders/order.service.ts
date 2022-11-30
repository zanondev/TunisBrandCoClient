import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IOrder } from "./order.model";

@Injectable()
export class OrderService{
    private api: string = 'http://localhost:5200';

    constructor(private httpClient: HttpClient){}

    public addOrder(newOrder: IOrder): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/Order`, newOrder);
    };

    public getOrder(): Observable<IOrder[]>{
        return this.httpClient.get<IOrder[]>(`${this.api}/Order`);
    };
}