import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-footer',
  templateUrl: './flat-footer.component.html',
  styles: []
})
export class FlatFooterComponent implements OnInit {
  data: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
