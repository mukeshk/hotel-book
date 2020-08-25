import { NgModule } from '@angular/core'
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
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component'
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component'
import { LifestyleComponent } from './lifestyle/lifestyle.component'
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component'
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component'
import { MaterialModule } from './material.module'
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
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
