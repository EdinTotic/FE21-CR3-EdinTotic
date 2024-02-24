import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KorbComponent } from './korb/korb.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"korb",component:KorbComponent},
  {path:"aboutUs",component:AboutUsComponent},
  {path:"footer",component:FooterComponent},
  {path:"produkte",component:ProdukteComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
