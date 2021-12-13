import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent implements OnInit {
  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An orange taste like an orange' },
    { title: 'What color is that cat?', content: 'The cat is an orange' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
