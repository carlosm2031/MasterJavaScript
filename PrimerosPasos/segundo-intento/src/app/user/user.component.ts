import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass'
})
export class UserComponent {
  username = 'pepe';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string){
    this.favGame = gameName
  }


  greet(){
    alert("Hola!!!!")
  }

}
