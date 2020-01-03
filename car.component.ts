import { Component} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
public cars = [
  {
    Name : 'Range Rover', Photo:'assets/car1.png', Likes:0, Dislikes:0
  },
  {
    Name : 'Ferari', Photo:'assets/car2.png', Likes:0, Dislikes:0
  }
];

public DislikesClick(car){
    car.Dislikes++;
    
}

public LikesClick(car){
  car.Likes++;
}

}
