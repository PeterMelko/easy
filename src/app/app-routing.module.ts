import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'clickables', loadChildren: './clickables/clickables.module#ClickablesPageModule' },
  { 
    path: 'members', 
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: 'darkentity', loadChildren: './darkentity/darkentity.module#DarkentityPageModule' },
  { path: 'biblicalentity', loadChildren: './biblicalentity/biblicalentity.module#BiblicalentityPageModule' },
  { path: 'underlyingcauses', loadChildren: './underlyingcauses/underlyingcauses.module#UnderlyingcausesPageModule' },
  { path: 'when', loadChildren: './when/when.module#WhenPageModule' },
  { path: 'body', loadChildren: './body/body.module#BodyPageModule' },
  { path: 'chakras', loadChildren: './chakras/chakras.module#ChakrasPageModule' },
  { path: 'meridians', loadChildren: './meridians/meridians.module#MeridiansPageModule' },
  { path: 'why', loadChildren: './why/why.module#WhyPageModule' },
  { path: 'reason', loadChildren: './reason/reason.module#ReasonPageModule' },
  { path: 'symptoms', loadChildren: './symptoms/symptoms.module#SymptomsPageModule' },
  { path: 'failsafes', loadChildren: './failsafes/failsafes.module#FailsafesPageModule' },
  { path: 'dataservice', loadChildren: './data.service'},
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'instructions', loadChildren: './instructions/instructions.module#InstructionsPageModule' }
  //,
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }