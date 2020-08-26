import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AccomodationComponent } from './accomodation/accomodation.component'
import { RoomsComponent } from './accomodation/rooms/rooms.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { SigninComponent } from './auth/signin/signin.component'
import { SignupComponent } from './auth/signup/signup.component'
import { CelebrationsComponent } from './celebrations/celebrations.component'
import { BarsComponent } from './food-and-beverage/bars/bars.component'
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component'
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component'
import { HomeComponent } from './home/home.component'
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component'
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component'
import { LifestyleComponent } from './lifestyle/lifestyle.component'
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component'
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component'
import { MaterialModule } from './material.module'
import { HeaderComponent } from './navigation/header/header.component'
import { NavtabsComponent } from './navigation/navtabs/navtabs.component'
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component'
import { OffersComponent } from './offers/offers.component'
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component'
import { WeddingsComponent } from './weddings/weddings.component'
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component'

@NgModule({
  declarations: [
    AppComponent,
    FoodAndBeverageComponent,
    RestaurantComponent,
    AccomodationComponent,
    RoomsComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
