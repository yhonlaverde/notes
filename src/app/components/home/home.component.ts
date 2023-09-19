import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card';
// import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [CommonModule,
  //   MatToolbarModule, 
  //   MatButtonModule,
  //   MatIconModule,
  //   MatCardModule,
  //   MatGridListModule],
  templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
