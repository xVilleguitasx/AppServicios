import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//Modulos firebase 
import { AngularFirestoreModule } from "@angular/fire/firestore"; //Modulo Firestore (BD)
import { AngularFireAuthModule } from "@angular/fire/auth";  //Modulo de authenticacion
import { AngularFireModule } from "@angular/fire";            //Modulo para inicializar y que todo funcione
import { AngularFireStorageModule } from "@angular/fire/storage"; //Storage
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule, ReactiveFormsModule,ComponentsModule],
  providers: [SplashScreen,StatusBar,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent], 
})
export class AppModule {}
