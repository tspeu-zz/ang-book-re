import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-animator',
  templateUrl: './animator.component.html',
  styleUrls: ['./animator.component.scss'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AnimatorComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
