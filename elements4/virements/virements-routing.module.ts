import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
     {
      path:'envoyees-areis',
      loadComponent:() =>import('./virements-envoyees-areis/virements-envoyees-areis.component'),
     },
     {
      path:'envoyees-aweb-clearing',
      loadComponent:()=>import('./virements-envoyees-aweb-clearing/virements-envoyees-aweb-clearing.component'),
     },
     {
      path:'recu-de-reis',
      loadComponent:() =>import('./virements-recu-de-reis/virements-recu-de-reis.component'),
     },
     {
      path:'recu-de-web-clearing',
      loadComponent:() => import('./virements-recu-de-web-clearing/virements-recu-de-web-clearing.component'),
     },
     {
      path:'acceptees-apres-retour-reis',
      loadComponent:()=>import('./virements-acceptees-apres-retour-reis/virements-acceptees-apres-retour-reis.component'),
     },
     {
      path:'bloquees-apres-retour-reiz',
      loadComponent:()=>import('./virements-bloquees-apres-retour-reiz/virements-bloquees-apres-retour-reiz.component'),
     },
     {
      path:'traitees-avec-erreur-apres-retour-reis',
      loadComponent:()=>import('./virements-traitees-avec-erreur-apres-retour-reis/virements-traitees-avec-erreur-apres-retour-reis.component'),
     },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirementsRoutingModule { }
