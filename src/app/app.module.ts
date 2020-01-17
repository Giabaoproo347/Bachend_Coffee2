import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoriesListComponent} from './component/categories/categories-list/categories-list.component';
import {CategoriesCreateComponent} from './component/categories/categories-create/categories-create.component';
import {CategoriesDeleteComponent} from './component/categories/categories-delete/categories-delete.component';
import {CategoriesDetailComponent} from './component/categories/categories-detail/categories-detail.component';
import {CategoriesEditComponent} from './component/categories/categories-edit/categories-edit.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {authInterceptorProviders} from './user/_helpers/auth.interceptor';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {ProfileComponent} from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    CategoriesListComponent,
    CategoriesCreateComponent,
    CategoriesDeleteComponent,
    CategoriesDetailComponent,
    CategoriesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
