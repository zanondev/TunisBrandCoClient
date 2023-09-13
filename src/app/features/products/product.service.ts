import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api: string = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) {}

  public addProduct(newProduct: IProduct): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.api}/Product`, newProduct);
  }

  public getProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.api}/Product`);
  }

  public UpdateStatusProduct(id: number): Observable<boolean> {
    return this.httpClient.patch<boolean>(`${this.api}/Product?id=${id}`, id);
  }

  public updateProduct(editedProduct: IProduct): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.api}/Product`, editedProduct);
  }

  public addStock(id: number, quantity: number): Observable<boolean> {
    return this.httpClient.put<boolean>(
      `${this.api}/Product/${quantity}?productId=${id}`,
      id
    );
  }
}
