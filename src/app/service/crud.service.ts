import { Injectable } from '@angular/core';
import { Developpeur } from '../Entity/Developpeur.Entity';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Entity/Contact.Entity';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUserUrl="http://localhost:8081/api/developpeur/login"
  apiUrl="http://localhost:8081/api"

  constructor(private http:HttpClient) { }
  loginDev(developpeur:Developpeur){
    return this.http.post<any>(this.loginUserUrl, developpeur);
  }
  addDeveloppeur(developpeur:Developpeur)
  {
   
   return this.http.post<any>(this.apiUrl+"/developpeur",developpeur);
  }

  addContact(contact:Contact)
  {
   
   return this.http.post<any>(this.apiUrl+"/contact",contact);
  }

  resetMdpDeveloppeurs(developpeur:Developpeur){
    return this.http.post<any>(this.apiUrl+"/dev",developpeur);
  }
}
