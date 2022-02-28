import { Component } from '@angular/core';
import * as ClassicEditor from 'ckeditor5/build/ckeditor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-newspapers';
  public Editor = ClassicEditor;
}
