import { Component } from '@angular/core';
import { Developpeur } from '../Entity/Developpeur.Entity';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Entity/Contact.Entity';
import { NgToastService } from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
import { Email } from '../Entity/Email.Entity';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  idDev: number;
  userDetails:any;
  updateForm:FormGroup;
  EmailForm:FormGroup;
  champsEditable: boolean = false;
  boutonVisible: boolean = false;
  listContact:Contact[];
  developpeur: Developpeur = new Developpeur();
  constructor(
   
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
    private toast:NgToastService
  ) {

    let formControls = {
      destinataire: new FormControl('',[
        Validators.required,]),
      sujet: new FormControl('',[
        Validators.required,]),
      message: new FormControl('',[
          Validators.required,
      ]),
      
   }

   this.service.getContact().subscribe(contact=>
    this.listContact=contact
  )
    this.userDetails = this.service.userDetails();
  
    this.updateForm = this.fb.group({
      nom: [this.userDetails ? this.userDetails.nom : '', [
        Validators.required,
      
      ]],
      prenom: [this.userDetails ? this.userDetails.prenom : '', [Validators.required]],
      email: [this.userDetails ? this.userDetails.email : '', [Validators.required]],
      mdp: [this.userDetails ? this.userDetails.mdp : '', [Validators.required]],
      adresse: [this.userDetails ? this.userDetails.adresse : '', [Validators.required]],
      tel: [this.userDetails ? this.userDetails.tel : '', [Validators.required]],
    });
  
    this.updateForm.disable();
  
     this.EmailForm = this.fb.group(formControls)
  }
   get destinataire() {return this.EmailForm.get('destinataire');}
  get sujet() { return this.EmailForm.get('sujet');}
  get message() {return this.EmailForm.get('message');}
 
  

   addNewEmail() {
    let data = this.EmailForm.value;
    console.log(data);
    let email = new Email(
     undefined, data.destinataire,data.sujet,);
    console.log(email);

    if (
      data.destinataire == 0 ||
      data.sujet == 0||
      data.message == 0 
  
     
      
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Votre champs est obligatoire',
      });
    } else 
      (confirm("votre email a  envoyé avec succeé" )); {
    this.service.addEmail(email).subscribe(
      res=>{
        console.log(res);
        this.route.navigate(['/profil']).then(()=>window.location.reload());
        this.toast.success({
          detail: 'Succes Message',
          summary: 'emailistrateur est Envoyé avec succés',
        });

       

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




 
  
  
  
  
  ngOnInit(): void {
    this.idDev = this.userDetails.id;
  
    this.service.findDevById(this.idDev).subscribe(
      (result) => {
        // Succès : mettre à jour le formulaire avec les détails de l'admin
        this.updateForm.patchValue({
          nom: result.nom,
          prenom: result.prenom,
          email: result.email,
          mdp: result.mdp,
          adresse: result.adresse,
          tel: result.tel
        });
      },
    
    );
  }
  
  
  updateDeveloppeur() {
    let data = this.updateForm.value;
    let developpeur =new Developpeur(
        this.idDev,
        data.nom,
        data.prenom,
        data.email,
        data.mdp,
        data.adresse,
        data.tel
      );
      console.log(developpeur);
      console.log(data);
      this.service.updateDev(this.idDev, developpeur).subscribe((res) => {
        console.log(res);
        this.route.navigate(['/profil']).then(()=>window.location.reload());
      });
    } 
  
    logout(){
      console.log("logout");
      localStorage.clear()
     
      this.route.navigate(['']);
     
    } 



    basculerEditionChamps() {
      this.champsEditable = !this.champsEditable;
      if (this.champsEditable) {
        this.updateForm.enable();
        this.boutonVisible = true;
      } else {
        this.updateForm.disable();
        this.boutonVisible = false;
      }
    }
  
}
