import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { authRoutes, AuthModule } from '@version1/auth';
import { LayoutModule } from '@version1/layout';
import { AuthGuard } from '@version1/auth';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    LayoutModule,
    RouterModule.forRoot(
      [
        { path: 'auth', children: authRoutes },
        {
          path: 'products',
          loadChildren: () =>
            import('@version1/products').then(module => module.ProductsModule),
          canActivate: [AuthGuard]
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
