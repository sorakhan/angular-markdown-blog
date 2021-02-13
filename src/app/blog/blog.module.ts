import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown'; 

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [BlogComponent, BlogPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule { }
