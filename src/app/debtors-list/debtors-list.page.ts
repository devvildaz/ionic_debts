import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  private loading : boolean = true;
  private open: boolean = false;
  validateForm!: FormGroup;

  @ViewChild('uploader') inputFile : ElementRef;

  constructor(private debtorService: DebtosServiceService, private alertController: AlertController, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.getDebtors();
    document.getElementById('uploader');
    this.validateForm = this.fb.group({
      dni: ["", [Validators.required]],
      name: ["", [Validators.required]]
    });
    
  }

  async uploadFile(file: File) {
    console.log('upload file')
    const alert = await this.alertController.create({
      header: 'CARGANDO...',
      message: 'Espere a que su archivo se termine de subir',
      backdropDismiss : false,
    });
    
    this.debtorService.sendReportFile(file).subscribe(
      res => {
        alert.header = "Archivo subido con exito"
        alert.message = "Su archivo se termino de subir"
        this.debtors = res;
      },
      err => {
        alert.header = "Subida fallida"
        alert.message = `
          Intente subir el archivo nuevamente
        `;
      },
      () => {
        alert.buttons = ["Aceptar"];
      }
    );

    await alert.present();
    
  }

  getDebtors() : void {
    this.debtorService.getDebts()
      .subscribe(result => {
        this.debtors = result;
      },
      err => {

      },
      () => {
        this.loading = false;
      });
  }


  openFileDialogSelector() : void {
    this.inputFile.nativeElement?.click();
  }

  async onChangeFileInput(event: Event) : Promise<void> {

    let file : File;
    console.log('dasdsa');
    if ( (event.target as HTMLInputElement).files && (event.target as HTMLInputElement).files.length ) {
      file = (event.target as HTMLInputElement).files[0];
      (event.target as HTMLInputElement).files = null;
      await this.uploadFile(file);
      (event.target as HTMLInputElement).value = '';
    }
  }

  switchOpen() {
    this.open = !this.open;
  }

  submitForm() {
    this.open = false;
    this.debtorService.addClient(this.validateForm.value.dni.toString(), this.validateForm.value.name).subscribe(res => {
      res.balance = 0.0;
      this.debtors.push(res);
    });
  }

  onSelect({dni }) {
    console.log(dni);
  }

  deleteCallback(dni: string) {
    console.log('dasd');
    this.debtorService.deleteClient({ dni }).subscribe(res => {
      this.debtors = this.debtors.filter((elem) => elem.dni.toString() !== dni)
    })
  }

}
