import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlEngagementComponent } from './html-engagement/html-engagement.component';

const routes: Routes = [
  {path: 'htmlEngagement', component: HtmlEngagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [HtmlEngagementComponent]
