import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "./product.model";

@Injectable()
export class ProductService{
    private api: string = 'http://localhost:5200';

    constructor(private httpClient: HttpClient){}

    public addOrder(newProduct: IProduct): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/Product`, newProduct);
    };

    public getOrder(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(`${this.api}/Product`);
    };
}