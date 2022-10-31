import { Component } from '@angular/core';
import { menuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  menuItems: menuItem[] = [
    {
      category: 'Breakfast',
      name: 'Eggs Benedict',
      description: 'Two poached eggs on an English muffin with Canadian bacon and hollandaise sauce',
      price: 10.99,
      image: "assets/images/eggs-benedict.jpeg"
    },
    {
      category: 'Breakfast',
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, bacon, and cheese wrapped in a flour tortilla',
      price: 8.99,
      image: '/assets/images/Breakfast-Burrito.jpg'
    },
    {
      category: 'Dinner',
      name: 'Steak',
      description: 'Grilled steak with a side of potatoes and vegetables',
      price: 20.99,
      image: '/assets/images/steak.jpg'
    },
  ];
}
