import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Entity/Contact.Entity';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  ContactForm:FormGroup
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,]),
        email: new FormControl('',[
          Validators.required,
          Validators.email
      ]),
      sujet: new FormControl('',[
          Validators.required,
      ]),
      message: new FormControl('',[
        Validators.required,
        Validators.maxLength(8)]),
      
   }
     this.ContactForm = this.fb.group(formControls)
   }
   get nom() {return this.ContactForm.get('nom');}
  get prenom() { return this.ContactForm.get('prenom');}
  get email() {return this.ContactForm.get('email');}

  get sujet() {return this.ContactForm.get('sujet');}
  get message() {return this.ContactForm.get('message');}
 

   addNewContact() {
    let data = this.ContactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined, data.nom,data.prenom,data.sujet,data.message);
    console.log(contact);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.sujet == 0 ||
      data.message == 0 
     
      
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Votre champs est obligatoire',
      });
    } else {
    this.service.addContact(contact).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Contactistrateur est Envoyé avec succés',
        });

        this.router.navigate(['/']);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )

    }
  }

  //supprimer

    ngOnInit(): void {
    }

}

