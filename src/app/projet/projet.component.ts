import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Projet } from '../Entity/Projet.Entity';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  listProjet:Projet[];
  status:String;
constructor(private service:CrudService){
  this.service.getProjet().subscribe(projet=>{
    this.listProjet=projet
  })
  this.status=localStorage.getItem("status") as String;
}
}
