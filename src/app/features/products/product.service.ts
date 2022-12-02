import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "./product.model";

@Injectable({providedIn : "root"})
export class ProductService{
    private api: string = 'http://localhost:5000/api';

    constructor(private httpClient: HttpClient){}

    public addProduct(newProduct: IProduct): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/Product`, newProduct);
    };

    public getProduct(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(`${this.api}/Products`);
    };
}