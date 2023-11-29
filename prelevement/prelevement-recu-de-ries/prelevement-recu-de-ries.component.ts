import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ValeurDTO } from 'src/app/essaie/schemas/valeur-dto';
import { PrelevementService } from 'src/app/essaie/service/prelevement.service';
import { OnInit } from '@angular/core';
import { Prelevements } from 'src/app/essaie/schemas/prelevements';
@Component({
  selector: 'app-prelevement-recu-de-ries',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './prelevement-recu-de-ries.component.html',
  styleUrls: ['./prelevement-recu-de-ries.component.scss']
})
export default class PrelevementRecuDeRiesComponent implements OnInit{
  recherche: ValeurDTO= new ValeurDTO()
  listPrelevements: Prelevements[]=[]
  constructor(private PrelevemetService: PrelevementService){}
  ngOnInit(): void {
    this.recherche.startDate='2023/01/01';
    this.recherche.endDate='2023/09/25';
    this.recherche.etat=[30];
    this.recherche.size= 10;
    this.recherche.page= 0;
    this.getPrelevement()
  }
  getPrelevement(){
    console.log('recuperation des prelevements')
    this.PrelevemetService.getPrelevement(this.recherche).subscribe(
      {
        next:(resp)=>{
          console.log(resp)
          if(!resp.error){
            this.listPrelevements=resp.data;
          }else{
          
          }
          
        }
      }
    )
  }
}
