import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'envoyer-vers-reiz',
        loadComponent: () => import('./cheque-envoyer-vers-reiz/cheque-envoyer-vers-reiz.component'),
      },
      {
        path:'envoyer-vers-web-clearing',
        loadComponent: () => import('./cheque-envoyer-vers-web-clearing/cheque-envoyer-vers-web-clearing.component'),
      },
      {
       path:'recu-de-reiz',
       loadComponent: () => import('./cheque-recu-de-reiz/cheque-recu-de-reiz.component'),
      },
      {
        path: 'recu-web-clearing',
        loadComponent: () => import('./cheque-recu-web-clearing/cheque-recu-web-clearing.component'),
      },
      {
         path:'acceptees-apres-retour-reis',
         loadComponent: () => import('./cheque-acceptees-apres-retour-reis/cheque-acceptees-apres-retour-reis.component')
      },
      {
        path:'bloquees-apres-retour-reis',
        loadComponent: () => import('./cheque-bloquees-apres-retour-reis/cheque-bloquees-apres-retour-reis.component')
      },
      {
        path:'traitees-avec-erreur-apres-retour-reis',
        loadComponent:() => import('./cheque-traitees-avec-erreur-apres-retour-reis/cheque-traitees-avec-erreur-apres-retour-reis.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChequeRoutingModule { }
