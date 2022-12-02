import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct()
    .pipe(take(1)).subscribe((productList: IProduct[])=>{
      this.products = productList;
    })
  }

   public updateProduct(id:number)
   {
    this.router.navigate(['/products/update', id])
   }

  //  public deletar(cpfCLiente:string){
  //   this.clientService.deleteCliente(cpfCLiente)
  //   .pipe(take(1)).subscribe(() => {
  //     alert(O cliente com CPF: ${cpfCLiente} foi alterado com sucesso!);
  //   });
  //  }

}
