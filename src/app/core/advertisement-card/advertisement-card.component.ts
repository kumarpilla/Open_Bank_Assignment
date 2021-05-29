import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.scss']
})
export class AdvertisementCardComponent implements OnInit {

  @Input() ImgUrl: string ;
  @Input() contentHeader: string ;
  @Input() contentDescription: string ;
  constructor() { }

  ngOnInit(): void {
  }

}
