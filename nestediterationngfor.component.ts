import { Component} from '@angular/core';

@Component({
  selector: 'app-nestediterationngfor',
  templateUrl: './nestediterationngfor.component.html',
  styleUrls: ['./nestediterationngfor.component.css']
})
export class NestediterationngforComponent {
public data = [{
  Category : 'Electronics',
  Products : ['Samsung Tv', 'Mobile']
},
{
  Category : 'Shoes',
  Products : ['Nike Casuals', 'Lee Cooper Boot']
}
];
}
