import { Component, Input, OnInit } from '@angular/core';
import { Debtor } from 'src/app/debtor';

@Component({
  selector: 'app-debt-item',
  templateUrl: './debt-item.component.html',
  styleUrls: ['./debt-item.component.scss'],
})
export class DebtItemComponent implements OnInit {

  @Input() debtor : Debtor;

  constructor() { }

  ngOnInit() {}

}
