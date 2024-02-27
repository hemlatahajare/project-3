import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { FormGroup,FormControl } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
// import { DropdownComponent } from './dropdown/dropdown.component';
import { ContactComponent } from './contact/contact.component';
import { ServicessComponent } from './servicess/servicess.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    // FormGroup,
    // FormControl,
   
    PortfolioComponent,
    TeamComponent,
    // DropdownComponent,
    ContactComponent,
    ServicessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    HttpModule

  ],
  providers: [MainService],   
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('constructor module loaded')
  }
 }
