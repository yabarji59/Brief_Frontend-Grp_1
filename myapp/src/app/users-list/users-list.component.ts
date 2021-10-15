import { Component, OnInit } from '@angular/core';

import { User } from '../user-interface';
import personsJson from '../../assets/data/JSON_Data_User.json';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  // Recuperer l'objet 'results' du fichier JSON
  personsJson: any = personsJson.results;
  // Créer un tableau d'utilisateurs en utilisant l'interface
  users: User[];

  constructor() { }

  ngOnInit(): void {
    // Relier les données du JSON à un utilisateur
    this.users = < User[] > this.personsJson;
    // Vérifier en console
    console.log(this.users);
  }

  // Obtenir l'icône selon l'âge
  getImageByAge(age: number): string {
    // Si moins de 40 ans
    if (age < 40) {
      return 'rookie.svg';
    // Si entre 40 et 60 ans
    } else if (age <= 60 && age >= 40) {
      return 'advance.svg';
    // Si plus de 60 ans
    } else if (age > 60) {
      return 'expert.svg';
    }
    return '';
  }

}
