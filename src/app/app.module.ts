import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { AuthorComponent } from './admin/author/author.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LayoutComponent, HeaderComponent, FooterComponent, AdminComponent, LibrarianComponent, BorrowerComponent, AuthorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
