import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  @Output()
  newItemAdded = new Subject<string>();

  //should this still be any?
  transferToCart(e: any) {
    // e is the value broadcast from Subject.next
    // console.log(e);
    console.log(`Inventory Component Says: ${e} selected`);
    this.newItemAdded.next(e);
  }

  //INVENTORY OF FRUITS
  FRUITS: string[] = [
    'acorn_squash',
    'apple',
    'bell_pepper',
    'blueberries',
    'broccoli',
    'carrot',
    'celery',
    'chili_pepper',
    'corn',
    'eggplant',
    'harold',
    'lettuce',
    'mushroom',
    'onion',
    'potato',
    'pumpkin',
    'radish',
    'squash',
    'strawberry',
    'sugar_snap',
    'tomato',
    'zucchini',
  ];
}
