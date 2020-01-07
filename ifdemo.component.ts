import { Component} from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent {

public isVisible = false;  
public btnText = "Show";


public product = {
  Name : "Samsung TV",
  Price : 4235.22,
  Photo : 'assets/rose.jpg'
}

public DisplayClick(){
  this.isVisible = (this.isVisible==false)?true:false;
  this.btnText = (this.btnText=='Show')?'Hide':'Show';
}
}
