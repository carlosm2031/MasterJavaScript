import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {

  constructor() {
    
  }

  ngOnInit(){
    $("header").css("background-color", "black");
  }
}
