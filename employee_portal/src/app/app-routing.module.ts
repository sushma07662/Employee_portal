import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupEmployeeComponent } from './signup-employee/signup-employee.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '.au';

const routes: Routes = [
  { path: 'signup-employee', component: SignupEmployeeComponent },
  { path: 'signup-admin', component: SignupAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
