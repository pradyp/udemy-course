import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ReciepesListComponent } from './reciepes/reciepes-list/reciepes-list.component';
import { ReciepesDetailComponent } from './reciepes/reciepes-detail/reciepes-detail.component';
import { ReciepeItemComponent } from './reciepes/reciepes-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    ReciepesComponent,
    ReciepesListComponent,
    ReciepesDetailComponent,
    ReciepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
