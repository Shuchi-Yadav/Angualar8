import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent{

  public products = [
    {
      Name: 'Samsung TV', Price:5698, Category: 'Electronics'
    },
    {
      Name: 'Mobile', Price:56980, Category: 'Electronics'
    },
    {
      Name: 'Nike casual', Price:2000, Category: 'Shoes'
    },
    {
      Name: 'Puma', Price:2500, Category: 'Shoes'
    }
  ];

  public filter = 'Electronics';

}
