import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces/post.interface";
import {PostComponent} from "../post/post.component";
import {NgFor} from "@angular/common";


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgFor
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: IPost[]

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getALl().subscribe(value => this.posts = value)
  }
}

