import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IpService } from './ip.service';
// import { Routes, RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ReferenceComponent } from './reference/reference.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Bai11XulitextinputComponent } from './bai11-xulitextinput/bai11-xulitextinput.component';
import { Bai12TwowaybindingComponent } from './bai12-twowaybinding/bai12-twowaybinding.component';
import { Bai13TemplateReferentVariableComponent } from './bai13-template-referent-variable/bai13-template-referent-variable.component';
import { Bai14StylebindingClassbindingComponent } from './bai14-stylebinding-classbinding/bai14-stylebinding-classbinding.component';
import { Bai15DirectiveNgstyleComponent } from './bai15-directive-ngstyle/bai15-directive-ngstyle.component';
import { Bai16IfComponent } from './bai16-if/bai16-if.component';
import { Bai17NgforComponent } from './bai17-ngfor/bai17-ngfor.component';
import { Bai18FormangdoituongComponent } from './bai18-formangdoituong/bai18-formangdoituong.component';
import { Bai19ThemphantuvaomangComponent } from './bai19-themphantuvaomang/bai19-themphantuvaomang.component';
import { Bai24InputComponent } from './bai24-input/bai24-input.component';
import { Bai25NgforkethopinputComponent } from './bai25-ngforkethopinput/bai25-ngforkethopinput.component';
import { ParentComponent } from './bai26-parent.component';
import { ChildComponent } from './bai26-child.component';
import { CardComponent } from './cart.component';
import { Bai33BuildpipeComponent } from './bai33-buildpipe/bai33-buildpipe.component';
import { IpComponent } from './ip.component';
import { RoundPipe } from './round.pipe';
import { Bai40WeatherServiceComponent } from './bai40-weather-service/bai40-weather-service.component';
import { Bai43FormComponent } from './bai43-form/bai43-form.component';
import { Bai53SignupComponent } from './bai53-signup/bai53-signup.component';
// import { Bai58ContactComponent } from './bai58-contact/bai58-contact.component';
import { BaiComponent } from './bai/bai.component';
// import { Bai58ContactDetailComponent } from './bai58-contact-detail/bai58-contact-detail.component';
// import { Bai58PageNotFoundComponent } from './bai58-page-not-found/bai58-page-not-found.component';
// const routesConfig: Routes = [
//   {path: 'contact', component: Bai58ContactComponent},
//   {path: 'detail', component: Bai58ContactDetailComponent },
//   { path: '', redirectTo: '/contact', pathMatch:'full' },
//   { path: '**', component: Bai58PageNotFoundComponent }
// ];

import { AppRoutingModule } from './app-routing.module';
import { Agl1Component } from './agl-1/agl-1.component';




@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ReferenceComponent,
    EventbindingComponent,
    Bai11XulitextinputComponent,
    Bai12TwowaybindingComponent,
    Bai13TemplateReferentVariableComponent,
    Bai14StylebindingClassbindingComponent,
    Bai15DirectiveNgstyleComponent,
    Bai16IfComponent,
    Bai17NgforComponent,
    Bai18FormangdoituongComponent,
    Bai19ThemphantuvaomangComponent,
    Bai24InputComponent,
    Bai25NgforkethopinputComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    Bai33BuildpipeComponent,
    RoundPipe,
    IpComponent,
    Bai40WeatherServiceComponent,
    Bai43FormComponent,
    Bai53SignupComponent,
    // Bai58ContactComponent,
    BaiComponent,
    Agl1Component,
    // Bai58ContactDetailComponent,
    // Bai58PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routesConfig),
    AppRoutingModule,
  ],
  providers: [
    IpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
