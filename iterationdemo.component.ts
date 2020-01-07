import { Component} from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.css']
})
export class IterationdemoComponent{
public products = [
  {
    Name:'Samsung Tv',
    Price: 545212
  },
  {
    Name: "Mobile",
    Price:58966
  },
  {
    Name: "washing Machine",
    Price:598845
  },
  {
    Name: "Watch",
    Price:2000
  },
  {
    Name: "Home Theater",
    Price:60000
  }
];
public txtName;
public txtPrice;

public NewProduct = {
  Name: " ",
  Price:0
}

public AddProduct(){
  alert("Product Added");
  this.NewProduct = {
    Name : this.txtName,
    Price : this.txtPrice
  };

  this.products.push(this.NewProduct);
  this.txtName = " ";
  this.txtPrice = " ";
}

public DeleteProduct(index){
  var status = confirm('Are you sure, want to Delete?');
  if(status == true){
    this.products.splice(index,1);
  }
}

}
