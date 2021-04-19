import { Component, OnInit } from '@angular/core';
import {TdMediaService} from '@covalent/core/media';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  name = 'Card Pattern';

  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

}
