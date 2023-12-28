import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/project';
import { Global } from '../../services/global';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.sass',
  providers: [ProjectService,UploadService]
})
export class EditComponent {

  public title:string;
  public project:Project;
  public filesToUpload: Array<File>;


  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _route:ActivatedRoute,
    private router: Router
  ){
    this.title = 'Editar Proyecto';
    this.project = new Project('', '', '', '', 2023, '', '');
    this.filesToUpload = [];
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      const projectId = params['id'];

      // Obtener los detalles del proyecto
      this._projectService.getProject(projectId).subscribe(
        response => {
          this.project = response;
        },
        error => {
          console.log(error);
          // Manejar el error según tus necesidades
        }
      );
    });
  }

  onSubmit(form:any){
    console.log(this.project);
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){
          
          // Subir imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest( Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any)=>{

              this.router.navigate(['/proyectos']);
            })
          }
          
        }else{

        }
      },
      error=>{
        console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  

}
