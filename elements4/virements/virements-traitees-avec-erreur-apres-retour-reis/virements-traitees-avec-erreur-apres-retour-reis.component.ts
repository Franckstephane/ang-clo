import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { VirementService } from 'src/app/essaie/service/virement.service';
import { Virements } from 'src/app/essaie/schemas/virements';
import { ValeurDTO } from 'src/app/essaie/schemas/valeur-dto';
@Component({
  selector: 'app-virements-traitees-avec-erreur-apres-retour-reis',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './virements-traitees-avec-erreur-apres-retour-reis.component.html',
  styleUrls: ['./virements-traitees-avec-erreur-apres-retour-reis.component.scss']
})
export default class VirementsTraiteesAvecErreurApresRetourReisComponent implements OnInit{
recherche: ValeurDTO= new ValeurDTO()
listVirements: Virements[]=[]

constructor( private VirementService: VirementService){}
ngOnInit(): void {
  this.recherche.startDate='2023/08/01';
  this.recherche.endDate='2023/09/01';
  this.recherche.etat=[50];
  this.recherche.size=10;
  this.recherche.page=0;
  this.getVirements();
}
getVirements(){
  console.log('recuprations des Virements')
  this.VirementService.getVirements(this.recherche).subscribe({
    next:(resp)=>{
      if(!resp.error){
        this.listVirements = resp.data
      }else{
        alert("une erreur est survenue")      }
    }
  })
}

}
