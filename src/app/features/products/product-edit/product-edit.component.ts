import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  public product: IProduct = {} as IProduct;
  public id: number = 0;
  public form!: FormGroup;

  constructor(private service: ProductService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      price: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      expiryDate: new FormControl(null, [Validators.required]),
      stockQuantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });

    this.route.params.subscribe(params => {this.id = params['id']});
  }

  public saveForm(): void {
    if (this.form.valid) {
      const newProduct: IProduct = {
        id: this.id,
        price: this.form.get('price')?.value,
        expiryDate: this.form.get('expiryDate')?.value,
        stockQuantity: this.form.get('stockQuantity')?.value,
        description: this.form.get('description')?.value,
        isActive: true,
      };


      this.service
        .updateProduct(newProduct)
        .pipe(take(1))
        .subscribe(() => {
        });

        alert('Produto editado com sucesso!');
    }
  }

  public cleanForm() {
    this.form.reset();
  }

}
