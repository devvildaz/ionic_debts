import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { Debtor } from '../debtor';
import { DebtosServiceService } from '../debtos-service.service';

@Component({
  selector: 'app-debtors-list',
  templateUrl: './debtors-list.page.html',
  styleUrls: ['./debtors-list.page.scss'],
})
export class DebtorsListPage implements OnInit {

  private debtors:Debtor[] = null;

  @ViewChild('uploader') inputFile : ElementRef;

  constructor(private debtorService: DebtosServiceService, private alertController: AlertController) {
    
  }

  ngOnInit() {
    this.getDebtors();document.getElementById('uploader');
  }

  async uploadFile(file: File) {
    const alert = await this.alertController.create({
      header: 'CARGANDO...',
      message: 'Espere a que su archivo se termine de subir',
      backdropDismiss : false,
    });
    
    alert.present();
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let ranNum = Math.round(Math.random() * 100);
        if ( ranNum % 2 === 0) {
          resolve("done");
        } else {
          reject("failed");
        }
      }, 2000);
    });
    try {
      await promise;
      alert.header = "Archivo subido con exito"
      alert.message = "Su archivo se termino de subir"
      alert.buttons = ["Aceptar"];
    } catch (e){
      alert.header = "Subida fallida"
      alert.message = `
        Intente subir el archivo nuevamente
      `;
      alert.buttons = ["Aceptar"];
    }

  }

  getDebtors() : void {
    this.debtorService.getDebts()
      .subscribe(result => this.debtors = result);
  }


  openFileDialogSelector() : void {
    this.inputFile.nativeElement?.click();
  }

  async onChangeFileInput(event: Event) : Promise<void> {

    let file : File;
    if ( (event.target as HTMLInputElement).files && (event.target as HTMLInputElement).files.length ) {
      file = (event.target as HTMLInputElement).files[0];
      await this.uploadFile(file);

    }
  }

}
