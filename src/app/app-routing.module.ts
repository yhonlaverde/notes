import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'note', component: NoteComponent}
  // Agrega más rutas según sea necesario
];

// const ROUTES: Routes = [
//   {path: '', component: HomeComponent},
//   // {path: 'note', loadChildren: () => import('my-lib').then((m) =>m.MyLibModule)},
 
//   {
   
//     children:[{
//       path:'note',
//       loadChildren: () => import('my-lib/src/lib/my-lib.module').then((m) => m.MyLibModule)
//     }]
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
