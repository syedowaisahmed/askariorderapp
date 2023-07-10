import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';
import { AdminGuard } from './shared/auth/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/pages/admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('src/app/pages/admin/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () =>  import('src/app/pages/admin/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'customer-products',
    canActivate: [AuthGuard],
    loadChildren: () =>  import('src/app/pages/customer/customer-products/customer-products.module').then(m => m.CustomerProductsModule)
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/pages/admin/orders/orders.module').then(m => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
