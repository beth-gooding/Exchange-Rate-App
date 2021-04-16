import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ConversionFormComponent } from './components/conversion-form/conversion-form.component';
import { ResultsComponent } from './components/results/results.component';
import { BodyComponent } from './components/layout/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    HeaderComponent,
    FooterComponent,
    ConversionFormComponent,
    ResultsComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
