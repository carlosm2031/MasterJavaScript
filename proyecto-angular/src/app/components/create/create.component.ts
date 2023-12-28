import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { FormsModule } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.sass',
  providers: [ProjectService, UploadService]
})
export class CreateComponent {

  public title:string;
  public project:Project;
  public status:string;
  public filesToUpload: Array<File>;

  constructor(private _projectService:ProjectService, private _uploadService:UploadService){
    this.title = 'Crear Proyecto';
    this.project = new Project('', '', '', '', 2023, '', '');
    this.status = '';
    this.filesToUpload = [];
  }

  ngOnInit(){
    
  }

  onSubmit(form:any){
    console.log(this.project);
    this._projectService.safeProject(this.project).subscribe(
      response=>{
        if(response.project){
          
          // Subir imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest( Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any)=>{
              this.status = 'created';
              form.reset();
            })
          }
          
        }else{
          this.status = 'failed';
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
