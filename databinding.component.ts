import { Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

 public product = {
   Name : 'Samsung TV',
   Price : 45982.00,
   Qty : 4,
   Mfd : new Date('2019/02/12'),
   InStock:false
 };

}
