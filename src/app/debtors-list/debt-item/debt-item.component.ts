import { Component, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Debtor } from 'src/app/debtor';
import { DebtosServiceService } from 'src/app/debtos-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-debt-item',
  templateUrl: './debt-item.component.html',
  styleUrls: ['./debt-item.component.scss'],
})
export class DebtItemComponent implements OnInit {
  @Input() debtors: Debtor[];
  @Input() debtor : Debtor;
  @Output('deleteCallback') deleteCallback: EventEmitter<string> = new EventEmitter();

  constructor(public navCtrl: NavController, private debtorService: DebtosServiceService) { }

  ngOnInit() {}

  goToViewPage() {
    this.navCtrl.navigateForward("/debt-view", { state: this.debtor });
  }


  deleteClient() {
    this.deleteCallback.emit(this.debtor.dni.toString());
  }

}
