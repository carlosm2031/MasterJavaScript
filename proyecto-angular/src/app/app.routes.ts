import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';


export const routes: Routes = [
    {path: '', component: AboutComponent },
    {path: 'sobre-mi', component: AboutComponent },
    {path: 'proyectos', component: ProjectsComponent },
    {path: 'crear-proyecto', component: CreateComponent },
    {path: 'contacto', component: ContactComponent },
    {path: 'proyecto/:id', component: DetailComponent },
    {path: '**', component: ErrorComponent }
];