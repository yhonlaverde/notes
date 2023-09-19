import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { MyLibComponent } from './my-lib.component'
import { CreateNoteComponent } from './components/createNote/create-note.component';

const routes: Routes = [
    { path: '', component: MyLibComponent }, // Ruta para la página de inicio
    {path: 'note', component: CreateNoteComponent},
    // Agrega más rutas según sea necesario
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyLibRoutingModule {}