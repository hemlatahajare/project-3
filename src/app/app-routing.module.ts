import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicessComponent } from './servicess/servicess.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { DropdownComponent } from './dropdown/dropdown.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'servicess',component:ServicessComponent
  },
  {
    path:'team',component:TeamComponent
  },
  {
    path:'portfolio',component:PortfolioComponent
  },
  // {
  //   path:'dropdown',component:DropdownComponent
  // },
  {
    path:'contact',component:ContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
