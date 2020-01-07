import { Component } from '@angular/core';

@Component({
  selector: 'app-jsontypedatausingngfor',
  templateUrl: './jsontypedatausingngfor.component.html',
  styleUrls: ['./jsontypedatausingngfor.component.css']
})
export class JsontypedatausingngforComponent {

  public products = [
    {
      Name : 'Samsung Tv',
      Price : 45620.00,
      Photo : 'assets/tv.jpg'
    },
    {
      Name : 'Nike Casuals',
      Price : '6400.00',
      Photo : 'assets/shoe.jpg'
    },
    {
      Name : 'Car',
      Price : '640000.00',
      Photo : 'assets/car.jpg'
    },
    {
      Name : 'Lee Booter',
      Price : '3400.00',
      Photo : 'assets/shoe1.png'
    }
  ]

}
