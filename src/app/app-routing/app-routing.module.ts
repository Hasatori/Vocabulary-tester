import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {CardsComponent} from '../cards/cards.component';
import {CardDetailComponent} from '../card-detail/card-detail.component';
import {AllVocabulariesComponent} from '../all-vocabularies/all-vocabularies.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'cards',component: CardsComponent},
  {path: 'card-detail',component:CardDetailComponent},
  {path: 'allVocabularies',component:AllVocabulariesComponent}
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


