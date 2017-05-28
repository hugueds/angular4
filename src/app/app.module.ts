import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WagonContainerComponent } from './wagon-container/wagon-container.component';
import { PartNumberComponent } from './part-number/part-number.component';
import { WagonNumberComponent } from './wagon-number/wagon-number.component';
import { WagonBoxComponent } from './wagon-box/wagon-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NavBarComponent,
    WagonContainerComponent,
    PartNumberComponent,
    WagonNumberComponent,
    WagonBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
