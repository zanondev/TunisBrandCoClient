import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IClient } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})

export class ClientTableComponent implements OnInit {
  
  public clients: IClient[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClient()
    .pipe(take(1)).subscribe((clientList: IClient[])=>{
      this.clients = clientList;
    })
  }

   public updateClient(id:number)
   {
    this.router.navigate(['/client/update', id])
   }

  //  public deletar(cpfCLiente:string){
  //   this.clientService.deleteCliente(cpfCLiente)
  //   .pipe(take(1)).subscribe(() => {
  //     alert(O cliente com CPF: ${cpfCLiente} foi alterado com sucesso!);
  //   });
  //  }
}
