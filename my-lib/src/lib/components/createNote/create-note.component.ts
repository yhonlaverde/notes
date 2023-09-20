import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'lib-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  note!: string;

  constructor(private router: Router,  private activatedRoute: ActivatedRoute) {
   
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveNote():void{

  }


  returnHome():void{
    this.router.navigate(['/home']);
  }

}
