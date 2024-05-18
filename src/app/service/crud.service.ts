import { Injectable } from '@angular/core';
import { Developpeur } from '../Entity/Developpeur.Entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../Entity/Contact.Entity';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Admin } from '../Entity/Admin.Entity';
import { Observable } from 'rxjs';
import { Projet } from '../Entity/Projet.Entity';
import { Email } from '../Entity/Email.Entity';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUserUrl="http://localhost:8081/api/developpeur/login"
  apiUrl="http://localhost:8081/api"
  apiUrlEmail="http://localhost:8081/api/developpeur/envoyerMail"
  helper= new JwtHelperService

  constructor(private http:HttpClient) { }

  loginDev(developpeur:Developpeur){
    return this.http.post<any>(this.loginUserUrl, developpeur);
  }
  addDeveloppeur(developpeur:Developpeur)
  {
   
   return this.http.post<any>(this.apiUrl+"/developpeur",developpeur);
  }

  addEmail(email:Email){
    return this.http.post<any>(this.apiUrlEmail,email);
  }

  findDevById(id : number): Observable<Developpeur> {
    const url =`${this.apiUrl + "/developpeur"}/${id}` ;
    return this.http.get<Developpeur>(url)
  }
  updateDev(id:number,developpeur: Developpeur) {
    const url =`${this.apiUrl+"/developpeur"}/${id}` 
    return this.http.put<any>(url, developpeur);

  }
  getAdmin() :Observable<Admin[]>{
    return this.http.get<any>(this.apiUrl+"/admin")

  }

  getProjet() :Observable<Projet[]>{
    return this.http.get<any>(this.apiUrl+"/projet")

  }

  addContact(contact:Contact)
  {
   
   return this.http.post<any>(this.apiUrl+"/contact",contact);
  }
  getContact():Observable<Contact[]>{
    return this.http.get<any>(this.apiUrl+"/contact")
  }

  resetMdpDeveloppeurs(developpeur:Developpeur){
    return this.http.post<any>(this.apiUrl+"/dev",developpeur);
  }

  userDetails(){
   
      let token:any=localStorage.getItem('myToken');
      let decodeToken= this.helper.decodeToken(token);
       return decodeToken.data;
     }


     
isLoggedIn(){

  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
  }

