import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewshome',
  templateUrl: './viewshome.component.html',
  styleUrls: ['./viewshome.component.css']
})
export class ViewshomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# pf Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Satsifaction Score'},
    
  ];
  items = [
    { image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    { image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a fantastic couch to sit on'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
