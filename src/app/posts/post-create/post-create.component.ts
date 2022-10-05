import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post-model/post-model.component";
import { PostService } from "../post-service/post.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    postTitle = '';
    postContent = '';

    onPost(form: NgForm){
        if(form.invalid){
            return;
        }
        this.postService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }  
    
    constructor(public postService: PostService){}

}