import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Virements } from 'src/app/essaie/schemas/virements';
import { VirementService } from 'src/app/essaie/service/virement.service';
import { ValeurDTO } from 'src/app/essaie/schemas/valeur-dto';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-virements-envoyees-aweb-clearing',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './virements-envoyees-aweb-clearing.component.html',
  styleUrls: ['./virements-envoyees-aweb-clearing.component.scss']
})
export default class VirementsEnvoyeesAWebClearingComponent implements OnInit {
  recherche: ValeurDTO=new ValeurDTO()
  listVirements: Virements[]=[];

  constructor(private VirementService: VirementService){}

  ngOnInit(): void {
    this.recherche.startDate='2023/07/05';
    this.recherche.endDate='2023/08/06';
    this.recherche.etat=[50];
    this.recherche.size=10;
    this.recherche.page=0;
    this.getVirements();
  }
 getVirements(){
  console.log('recuperations des Virements')
  this.VirementService.getVirements(this.recherche).subscribe({
    next:(resp)=>{
      if(!resp.error){
        this.listVirements=resp.data
      }else{
       alert("erreur de chargement")
      }
    }
  })
 }
}
