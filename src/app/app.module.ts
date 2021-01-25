import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { JwtInterceptor } from './token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WarehouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
