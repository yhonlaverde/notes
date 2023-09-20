import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { MyLibComponent } from './my-lib.component'
const routes: Routes = [
   
    {
      path:'',
      component: MyLibComponent,
      children:[
        {
          path:'note',
          loadChildren: () => import('./components/createNote/create-note.module').then((m) => m.CreateNoteModule)
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyLibRoutingModule {}