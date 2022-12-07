import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IClient } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private service: ClientService) {}

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      birthDate: new FormControl(null, [Validators.required]),
    });
  }
  public saveForm(): void {
    if (this.form.valid) {
      const newCLient: IClient = {
        id: 0,
        name: this.form.get('name')?.value,
        cpf: this.form.get('cpf')?.value,
        birthDate: this.form.get('birthDate')?.value,
        loyaltyPoints: 0,
      };

      this.service
        .addClient(newCLient)
        .pipe(take(1))
        .subscribe(() => {
          this.cleanForm();
          alert('Cliente cadastrado com sucesso!');
        });
    }
  }

  public cleanForm() {
    this.form.reset();
  }
}
