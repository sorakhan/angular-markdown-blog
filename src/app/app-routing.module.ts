import { NgModule, SecurityContext } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
