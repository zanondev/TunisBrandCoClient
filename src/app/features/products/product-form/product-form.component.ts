import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IClient } from '../../clients/client.model';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit{
  public form!: FormGroup;

  constructor(private service: ProductService) {}
  
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
  }
  public saveForm(): void {
    if (this.form.valid) {
      const newProduct: IProduct = {
        id: 0,
        price: this.form.get('price')?.value,
        expiryDate: this.form.get('expiryDate')?.value,
        stockQuantity: this.form.get('stockQuantity')?.value,
        description: this.form.get('description')?.value,
        isActive: true,
      };


      this.service
        .addProduct(newProduct)
        .pipe(take(1))
        .subscribe(() => {
          alert('Produto cadastrado com sucesso!');
        });
    }
  }

  public cleanForm() {
    this.form.reset();
  }




  }


