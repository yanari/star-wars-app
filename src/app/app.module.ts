import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { StarWarsService } from './star-wars.service';
import { LoggerService } from './logger.service';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { HamburgerMenuComponent } from './header/hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerComponent,
    HamburgerMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StarWarsService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
