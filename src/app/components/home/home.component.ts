import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {
  longText: any;

  

  constructor(private router: Router){
    
  }
  ngOnInit(): void {
    this.longText = localStorage.getItem('listNotes')
    console.log(this.longText)
  }
  newNote():void{
    this.router.navigate(['/note']);
  }
}
