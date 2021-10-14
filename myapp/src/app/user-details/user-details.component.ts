import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user-interface';
import personsJson from '../../assets/data/JSON_Data_User.json';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  // Recuperer l'objet 'results' du fichier JSON
  personsJson: any = personsJson.results;
  // Créer un tableau d'utilisateurs
  users: User[];
  // Créer un utilisateur
  user: User;
  userNameParameter: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Relier les données du JSON à un utilisateur
    this.users = < User[] > this.personsJson;
    // Récupérer le surnom passé en paramètre (dans l'URL)
    this.userNameParameter = this.route.snapshot.paramMap.get('username');
    // Vérifier en console
    console.log(this.userNameParameter);
    // Retrouver l'utilisateur d'après son surnom
    this.user = this.users.find(
      (user) => ':' + user.login.username === this.userNameParameter);
    // Vérifier en console
    console.log(this.user);
  }

}
