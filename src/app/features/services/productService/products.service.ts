import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private giftImage:string[] = []
 private premiumImage:string[] = []
 private itemImage:string[] = []
 private certiImages:string[] = []
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://flower.elevateegy.com/api/v1/products')
  }
  getSpecificProduct(id:any){
    return this.http.get("https://flower.elevateegy.com/api/v1/products/"+id)
  }

  getImages(){
    return this.http.get('data/images.json')
  }
  getGiftImages(){
   return this.giftImage = [
      "images/gift2.jpg",
      "images/gift1.png",
      "images/gift3.png",
      "images/gift4.png",
    ]
  }
  getItemImages(){
  return this.itemImage = [
    "images/premiumGift1.png",
  "images/item2.png",
  "images/item3.png",
  "images/item4.png",
  "images/item5.png",
  "images/item6.png",
  "images/item7.png",
  "images/item8.png",
  "images/item9.png",
  "images/item10.png",
  "images/item11.png",
  "images/item12.png"
   ]
  }
  getPremiumImages(){
    return this.premiumImage = [
    "images/premiumGift1.png",
    "images/premiumGift2.png",
    "images/premiumGift3.png",
    ]
  }
  getCertiImages(){
    return this.certiImages = [
      "images/certi1.png",
      "images/certi2.png",
      "images/certi3.png",
      "images/certi4.png",
      "images/certi5.png",
      "images/certi6.png",
    ]
  }

}
