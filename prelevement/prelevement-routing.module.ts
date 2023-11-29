import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'envoyees-areis',
        loadComponent: () => import('./prelevement-envoyees-areis/prelevement-envoyees-areis.component'),
      },
      {
         path: 'envoyees-aweb-clearing',
         loadComponent: () => import('./prelevement-envoyees-aweb-clearing/prelevement-envoyees-aweb-clearing.component'),
      },
      {
      path:'recu-de-ries',
      loadComponent: () => import('./prelevement-recu-de-ries/prelevement-recu-de-ries.component'),
      },
      {
        path:'recu-de-web-clearing',
        loadComponent: () => import('./prelevement-recu-de-web-clearing/prelevement-recu-de-web-clearing.component'),
      },
      {
        path: 'acceptees-apres-retour-reis',
        loadComponent: () => import('./prelevement-acceptees-apres-retour-reis/prelevement-acceptees-apres-retour-reis.component'),
      },
      {
        path:'bloquees-apres-retour-reis',
        loadComponent: () => import('./prelevement-bloquees-apres-retour-reis/prelevement-bloquees-apres-retour-reis.component'),
      },
      {
        path: 'traitees-avec-erreur-apres-retour-reis',
        loadComponent:() => import('./prelevement-traitees-avec-erreur-apres-retour-reis/prelevement-traitees-avec-erreur-apres-retour-reis.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrelevementRoutingModule { }
