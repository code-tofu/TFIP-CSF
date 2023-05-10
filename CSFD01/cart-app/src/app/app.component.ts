import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cart-app';

  cartHistory: string[] = [];
  cartMap = new Map<string, number>();

  addToCart(e: any) {
    console.log(`App Component Says: ${e} is transferred to cart component`);

    this.cartHistory.push(e);
    console.log(this.cartHistory);

    if (!this.cartMap.has(e)) {
      this.cartMap.set(e, 1);
    } else {
      let v: number | undefined = this.cartMap.get(e);
      //if not found returns undefined, hence type error
      let val: number = Number(this.cartMap.get(e));
      this.cartMap.set(e, val + 1);
    }
  }
}
