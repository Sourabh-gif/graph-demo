import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-demo',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  name:string = '';
  constructor() {}

  ngOnInit() {
    this.name = "sourabh"
  }
}