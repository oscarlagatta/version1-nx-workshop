import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Added
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '@version1/material';
import { AuthInterceptor } from './interceptors/AuthInterceptor';

export const authRoutes: Route[] = [{ path: '', component: LoginComponent }];

const Components = [LoginComponent, LoginFormComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: Components,
  exports: Components,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}
