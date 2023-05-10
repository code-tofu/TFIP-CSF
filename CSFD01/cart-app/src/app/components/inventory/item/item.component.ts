import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input()
  img: string = '';

  @Input()
  name: string = '';

  @Output()
  newItemAdded = new Subject<string>();

  selectToCart(e: any) {
    // e is not needed?
    // console.log(e);
    // remember fstrings is using backticks
    // remember self-reference this
    console.log(`Item Component Says: ${this.name} selected`);
    this.newItemAdded.next(this.name);
  }
}
