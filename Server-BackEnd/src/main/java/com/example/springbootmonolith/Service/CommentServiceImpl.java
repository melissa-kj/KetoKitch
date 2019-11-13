package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Repository.CommentRepository;
import com.example.springbootmonolith.Repository.RecipeRepository;
import com.example.springbootmonolith.Repository.UserRepository;
import com.example.springbootmonolith.model.Comment;
import com.example.springbootmonolith.model.Recipe;
import com.example.springbootmonolith.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;
    /**
     *
     * @param newComment
     * @param recipeId
     * @return This method requires an additional tie-back to the user.
     * ex. (user.setComment(newComment)) but the setComment method does not exist in user model.
     * Comments are associated to the user model as a List.  user.addComment method returns a null value.
     */
    @Override
    public Comment createComment(Comment newComment, Long recipeId, String username) {
        User user = userRepository.findByUsername(username);
        newComment.setUser(user);
        Recipe newRecipe = recipeRepository.findById(recipeId).get();
        newComment.setRecipe(newRecipe);
            return commentRepository.save(newComment);
    }

    /**
     *
     * @return comments as list.
     */
    @Override
    public Iterable<Comment> listComments(){
        return commentRepository.findAll();
    }

    /**
     *
     * @param commentId
     * @return httpStatus OK if comment delete successful.
     */
    @Override
    public HttpStatus deleteComment(Long commentId){
        commentRepository.deleteById(commentId);

        return HttpStatus.OK;
    }

}
