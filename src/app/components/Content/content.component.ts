import { Component } from '@angular/core';
import { NamesListComponent } from "../names-list/names-list.component";

@Component({
  selector: 'app-content',
  imports: [NamesListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
