package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.model.Comment;
import com.example.springbootmonolith.model.User;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface CommentService {


    public Comment createComment (Comment newComment, Long recipeId, String username);


    public Iterable<Comment> listComments();

    public HttpStatus deleteComment(Long commentId);
}
