import { Injectable } from "@angular/core";
import { Post } from "../post-model/post-model.component";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class PostService {

    private posts : Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts = () => {
        return this.posts;
    }

    getUpdatePostListener = () =>{
        return this.postsUpdated.asObservable();
    }

    addPost = (title: string, content: string) => {
        const post : Post = {
            title : title,
            content: content
        }
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }

}