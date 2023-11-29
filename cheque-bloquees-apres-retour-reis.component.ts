import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChequeService } from 'src/app/essaie/service/cheque.service';
import { ValeurDTO } from 'src/app/essaie/schemas/valeur-dto';
import { Cheques } from 'src/app/essaie/schemas/cheques';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-cheque-bloquees-apres-retour-reis',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './cheque-bloquees-apres-retour-reis.component.html',
  styleUrls: ['./cheque-bloquees-apres-retour-reis.component.scss']
})
export default class ChequeBloqueesApresRetourREISComponent implements OnInit {

  recherche: ValeurDTO= new ValeurDTO();
  listCheques: Cheques[]=[]
 
  constructor( private chequeService: ChequeService){}
  ngOnInit(): void {
    this.recherche.startDate='2023/01/01';
    this.recherche.endDate='2023/09/25';
    this.recherche.etat=[40];
    this.recherche.size= 10;
    this.recherche.page= 0;
    this.getCheque()
  }
  getCheque(){
    console.log('recuperation des cheques')
    this.chequeService.getCheque(this.recherche).subscribe(
      {
        next:(resp)=>{
          console.log(resp)
          if(!resp.error){
            this.listCheques= resp.data;
          }else{

          }
        }
      }
    )
  }

}
