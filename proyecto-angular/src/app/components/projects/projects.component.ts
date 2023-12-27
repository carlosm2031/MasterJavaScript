import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { Global } from '../../services/global';
import { ProjectService } from '../../services/project.service';
import { CommonModule, NgForOf } from '@angular/common'; // Add this import
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf,CommonModule,RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass',
  providers: [ProjectService]
})
export class ProjectsComponent {

  public projects: Project[];
  public url: string;
  public title:string;

  constructor(private _projectService: ProjectService) {
    this.title = 'Proyectos';
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(){
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
