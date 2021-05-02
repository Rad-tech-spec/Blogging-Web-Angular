import { Component, OnInit, Output, Input ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagingcomponent',
  templateUrl: './pagingcomponent.component.html',
  styleUrls: ['./pagingcomponent.component.css']
})

export class PagingcomponentComponent implements OnInit {


  @Input() page;
  @Output() newPage = new EventEmitter;

  constructor() { }

  clickPrev(){

    if(this.page > 1)
      this.newPage.emit(this.page - 1);
  }

  clickNext()
  {
    this.newPage.emit(this.page + 1);
  }

  ngOnInit(): void {}
}
