import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {CardsComponent} from '../cards/cards.component';
import {CardDetailComponent} from '../card-detail/card-detail.component';
import {AllVocabulariesComponent} from '../all-vocabularies/all-vocabularies.component';
import {AuthGuard} from '../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'cards',component: CardsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'card-detail',
    component:CardDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'allVocabularies',
    component:AllVocabulariesComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}


