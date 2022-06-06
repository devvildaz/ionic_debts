import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { Debtor } from '../debtor';
import { DebtorBalance } from '../debtor-balance';
import { DebtosServiceService } from '../debtos-service.service';

@Component({
  selector: 'app-debt-view',
  templateUrl: './debt-view.page.html',
  styleUrls: ['./debt-view.page.scss'],
})
export class DebtViewPage implements OnInit {
  validateForm!: FormGroup;
  public debtor: Debtor = null;
  public  balances : DebtorBalance[] = null;
  public loading : boolean = true;
  public open: boolean = false;
  public amount : number = 0.0;


  constructor(private debtorService : DebtosServiceService, private route: ActivatedRoute, private router: Router, public navCtrl: NavController, private fb: FormBuilder) {
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.debtor = this.router.getCurrentNavigation().extras.state as Debtor;
        this.getHistorial(this.debtor.dni.toString());
      } else {
        this.navCtrl.navigateBack("/debtors-list") 

      }
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      amount: [0.0, [Validators.required]],
    });
    
  }

  getHistorial(dni: string){
    this.debtorService.getDebtBalance(dni).subscribe(
      res => {
        this.balances = res;
      },
      err => {

      },
      () => {
        this.loading = false;
      }
    )
  }

  convertDate(value: string) {
    return new Date(value).toISOString().slice(0,10);
  }

  goBack(){
    this.navCtrl.back(); 
  }

  switchOpen() {
    this.open = !this.open;
  } 

  submitForm() {
    this.open = false;
    this.debtorService.addBalance(this.debtor.dni.toString(), this.validateForm.value.amount).subscribe(res => {
      this.balances.push(res);
      this.debtor.balance += Number(res.amount);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.debtorService.getDebtBalance(this.debtor.dni.toString()).subscribe(
      res => {
        this.balances = res;
        let sum = 0;
        for(let balance of res) {
          sum += Number(balance.amount);
        }
        this.debtor.balance = sum;
        event.target.complete();
      },
      err => {

      },
      () => {
        event.target.complete();
      }
    )
  }

}
