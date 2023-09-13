import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IClient } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit{
  public client: IClient = {} as IClient;
  public id: number = 0;
  public form!: FormGroup;

  constructor(private service: ClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      birthDate: new FormControl(null, [Validators.required]),
    });

    this.route.params.subscribe(params => {this.id = params['id']});

  }

  public saveForm(): void {
    if (this.form.valid) {
      const newCLient: IClient = {
        id: this.id,
        name: this.form.get('name')?.value,
        cpf: this.form.get('cpf')?.value,
        birthDate: this.form.get('birthDate')?.value,
        loyaltyPoints: this.client.loyaltyPoints,
      };

      this.service
        .updateClient(newCLient)
        .pipe(take(1))
        .subscribe(() => {
          this.cleanForm();
        });

        alert('Cliente editado com sucesso!');
        this.cleanForm();
    }
  }

  public cleanForm() {
    this.form.reset();
  }



  }




