import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  post: string; 

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/blog-posts/' +  articleName + '.md';
  }

}