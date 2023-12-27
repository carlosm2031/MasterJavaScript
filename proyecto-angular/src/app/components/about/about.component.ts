import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {

  public title:string;
  public subtitle:string;
  public email:string;

  constructor() {
    this.title = 'Carlos Quezada';
    this.subtitle = 'Desarrollador Web';
    this.email = 'correo@example.com';
  }

  ngOnInit(): void {
    
  }
}
