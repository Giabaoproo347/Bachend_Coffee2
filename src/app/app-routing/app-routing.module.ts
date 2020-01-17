import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesListComponent} from '../component/categories/categories-list/categories-list.component';
import {CategoriesCreateComponent} from '../component/categories/categories-create/categories-create.component';
import {CategoriesEditComponent} from '../component/categories/categories-edit/categories-edit.component';
import {CategoriesDeleteComponent} from '../component/categories/categories-delete/categories-delete.component';
import {CategoriesDetailComponent} from '../component/categories/categories-detail/categories-detail.component';
import {LoginComponent} from '../user/login/login.component';
import {RegisterComponent} from '../user/register/register.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'categories-list', component: CategoriesListComponent},
  {path: 'categories-create', component: CategoriesCreateComponent},
  {path: 'categories-edit/:id', component: CategoriesEditComponent},
  {path: 'categories-delete/:id', component: CategoriesDeleteComponent},
  {path: 'categories-detail/:id', component: CategoriesDetailComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
