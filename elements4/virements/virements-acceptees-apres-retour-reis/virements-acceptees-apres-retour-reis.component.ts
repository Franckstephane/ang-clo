import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ValeurDTO } from 'src/app/essaie/schemas/valeur-dto';;
import { OnInit } from '@angular/core';
import { VirementService } from 'src/app/essaie/service/virement.service';
import { Virements } from 'src/app/essaie/schemas/virements';
@Component({
  selector: 'app-virements-acceptees-apres-retour-reis',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './virements-acceptees-apres-retour-reis.component.html',
  styleUrls: ['./virements-acceptees-apres-retour-reis.component.scss']
})
export default class VirementsAccepteesApresRetourReisComponent implements OnInit {
  recherche: ValeurDTO= new ValeurDTO()
  listVirements: Virements[]=[]
  constructor(private VirementService: VirementService){}
  ngOnInit(): void {
    this.recherche.startDate='2023/01/01';
      this.recherche.endDate='2023/09/25';
      this.recherche.etat=[50];
      this.recherche.size= 10;
      this.recherche.page= 0;
      this.getVirements()
}
getVirements(){
  console.log('recuperation des virements')
  this.VirementService.getVirements(this.recherche).subscribe({
    next:(resp)=>{
      console.log(resp)
      if(!resp.error){
        this.listVirements= resp.data;
      }else{

      }
    }
  }
)
}
}
