import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add-stock',
  templateUrl: './product-add-stock.component.html',
  styleUrls: ['./product-add-stock.component.css'],
})
export class ProductAddStockComponent implements OnInit {
  public product: IProduct = {} as IProduct;
  public quantity: number = 0;
  public id: number = 0;
  public form!: FormGroup;

  constructor(private service: ProductService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
    });

    this.route.params.subscribe(params => {this.id = params['id']});
  }

  public saveForm(): void {
    if (this.form.valid) {
      
      (this.quantity = this.form.get('quantity')?.value),
      
        this.service
          .addStock(this.id, this.quantity)
          .pipe(take(1))
          .subscribe(() => {});

      alert('Adicionado em estoque com sucesso!');
      this.cleanForm();
    }
  }

  public cleanForm() {
    this.form.reset();
  }
}
