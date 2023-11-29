import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GestionService } from 'src/app/essaie/service/gestion.service';
import { User } from './user.model';
import { NgForm } from '@angular/forms';
import { ImprimerService } from 'src/app/essaie/service/imprimer.service';
@Component({
  selector: 'app-gestion-des-utilisateurs',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './gestion-des-utilisateurs.component.html',
  styleUrls: ['./gestion-des-utilisateurs.component.scss']
})
export default class GestionDesUtilisateursComponent implements OnInit{


  
  users: User[];
  newUser: User = { id: 0, nom: '', prenom: '', email: '' };
  editedUser: User = null; // Ajout d'une propriété pour suivre l'utilisateur en cours de modification
  submitted = false;

  constructor(private gestionService: GestionService) { }




  ngOnInit(): void {
    this.getUsers();
    this.loadFormDataFromSession();
  }

  getUsers(): void {
    this.users = this.gestionService.getUsers();
  }





  onSubmit(userForm: NgForm): void {
    this.submitted = true;

    // Vérifier si le formulaire est valide
    if (userForm.invalid) {
      alert('Le formulaire contient des erreurs. Veuillez le corriger.');
      return;
    }





    // Vérifier si l'utilisateur est en cours de modification
    if (this.editedUser) {
      // Mettre à jour l'utilisateur existant
      this.gestionService.updateUser (this.newUser);
      this.editedUser = null; // Réinitialiser l'utilisateur en cours de modification
    } else {



      // Vérifier si l'utilisateur existe déjà
      const existingUser = this.users.find(u => u.email === this.newUser.email);
      if (existingUser) {
        alert('Cet utilisateur existe déjà.');
        return;
      }




      // Ajouter le nouvel utilisateur
      this.gestionService.addUser(this.newUser);
    }





    // Actualiser la liste des utilisateurs
    this.getUsers();

    // Réinitialiser le formulaire et le nouvel utilisateur
    this.resetForm(userForm);

    this.saveFormDataToSession();




  }

  editUser(user: User): void {
    // Mettre l'utilisateur en cours de modification et remplir le formulaire
    this.editedUser = user;
    this.newUser = { ...user };





  }

  deleteUser(userId: number): void {
    this.gestionService.deleteUser(userId);

    // Actualiser la liste des utilisateurs
    this.getUsers();




  }

  resetForm(userForm: NgForm): void {
    this.submitted = false;
    this.newUser = { id: 0, nom: '', prenom: '', email: '' };
    userForm.resetForm();




  }
  private saveFormDataToSession(): void {
    // Utiliser SessionStorage pour stocker les données du formulaire
    sessionStorage.setItem('formData', JSON.stringify(this.newUser));
  }





  private loadFormDataFromSession(): void {
    // Charger les données du formulaire depuis la session
    const formData = sessionStorage.getItem('formData');
    if (formData) {
      this.newUser = JSON.parse(formData);
    }
  }

}
 

  // saveUser():void{
    // sessionStorage.setItem("userconnecte", "eyJhbGciOiJIUzUxMiJ9.eyJyZWZyZXNoVG9rZW4iOiIyYWU1NjUwMy1kYmNiLTRmNTEtOTg0OC1iMWY5NWJjNDNhYmEiLCJ1c2VyIjp7ImlkIjoiOTU0NjM5OWYtZmM0Yy00YWJkLWJlMzktMDRlMDBhNDNhMGVlIiwiZmlyc3ROYW1lIjoiRE9MT1IiLCJsYXN0TmFtZSI6IklUIiwibG9naW4iOiJhZG1pbiIsImVtYWlsIjoiZG9sb3ItaXRAZGlmaW4uY29tIiwicGhvbmVOdW1iZXIiOiIyMjUwMTAyMDMwNCIsImZpcnN0Q29ubmV4aW9uIjpmYWxzZSwiYXR0ZW1wdCI6MCwibG9ja2VkIjpmYWxzZSwibXVzdE5vdGlmeSI6bnVsbCwicm9sZXMiOm51bGx9LCJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwic2Vzc2lvblRpbWVvdXQiOjE1LCJpYXQiOjE2OTUxNDY4NDEsImV4cCI6MTY5NTE1MDQ0MX0.3cQ8cYnb-4uPhCEb5nRqTtsFEMOih0c9Z1lfbXM7G03xa7VXU2xGjXROStg2cmeEVtEo6wr3nvb-3dTxm0oV6w")
 
  // constructor(){
  //   // this.saveUser();
  // }

