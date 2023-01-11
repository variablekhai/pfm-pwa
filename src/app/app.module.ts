import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebNavbarComponent } from './components/web-navbar/web-navbar.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { WalletBarComponent } from './components/wallet-bar/wallet-bar.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ExpenseModalComponent } from './components/expense-modal/expense-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WebNavbarComponent,
    MobileNavbarComponent,
    WalletBarComponent,
    TrackerComponent,
    ExpensesComponent,
    ExpenseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
