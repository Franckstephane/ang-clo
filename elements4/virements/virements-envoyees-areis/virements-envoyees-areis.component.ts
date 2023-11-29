import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ValeurDTO } from 'src/app/essaie/schemas/valeur-dto';
import { VirementService } from 'src/app/essaie/service/virement.service';
import { OnInit } from '@angular/core';
import { Virements } from 'src/app/essaie/schemas/virements';
@Component({
  selector: 'app-virements-envoyees-areis',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './virements-envoyees-areis.component.html',
  styleUrls: ['./virements-envoyees-areis.component.scss']
})
export default class VirementsEnvoyeesAReisComponent implements OnInit {
  recherche: ValeurDTO= new ValeurDTO();
  listVirements: Virements[]=[];

  constructor(private VirementService: VirementService){}

  ngOnInit(): void {
    this.recherche.startDate='2023/07/01';
    this.recherche.endDate= '2023/08/03';
    this.recherche.etat=[50];
    this.recherche.size=10;
    this.recherche.page=0;
    this.getVirements();
  }
  getVirements(){
    console.log('recuperation des virements')
    this.VirementService.getVirements(this.recherche).subscribe({
      next:(resp)=>{
        if (!resp.error){
          this.listVirements=resp.data
        }else{
          
        }
      }
    })
  }

}
