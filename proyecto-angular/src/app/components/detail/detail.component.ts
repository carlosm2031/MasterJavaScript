import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global'; 
import {Router, ActivatedRoute, Params} from '@angular/router';
import { error } from 'console';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass',
  providers: [ProjectService]
})


export class DetailComponent implements OnInit{

  public url:string;
  public projectt:Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this.url = Global.url;
    this.projectt = new Project('', '', '', '', 2023, '', ''); // Asignar un valor inicial
  }

  ngOnInit() {
    this._route.params.pipe(
      switchMap(params => {
        let id = params['id'];
        console.log('Valor del parámetro "id":', id);
        return this._projectService.getProject(id);
      })
    ).subscribe(
      response => {
        this.projectt = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  // getProject(id:string){
  //   this._projectService.getProject(id).subscribe(
  //     response =>{
  //       this.projectt = response.project;
  //     },error =>{
  //       console.log(error);
  //     }
  //   )
  // }


}
