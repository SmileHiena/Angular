import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/Home/Home.component';
import { LoginComponent } from './components/Login/Login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';







const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-add', component: CategoryAddComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-add', component: ProductAddComponent},
  { path: 'product-edit/:id', component: ProductEditComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryListComponent,
    MenuComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    //AppRoutingModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
