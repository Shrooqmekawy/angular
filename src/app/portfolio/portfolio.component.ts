import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images: string[] = [
    '/img/1_SepPK5_D3yAUvTtsj0HoDg.png',
    '/img/img1.jpeg',
    '/img/Angular-open-source-min.webp',
    '/img/img3.jpeg',
    '/img/angular-feature-image-1.png',
    '/img/Angular-open-source-min.webp'
  ];
imagesrc!:string|null

getimg(image: string): void {
  this.imagesrc = image;
}

escimg():void{
  this.imagesrc=null;
}

// getimg(event: Event):void
//  {
//  let target=event.target as HTMLImageElement;
//  let imagessrc=target.getAttribute('src');
//  if(imagessrc){
//   this.imagesrc=imagessrc;}
}
