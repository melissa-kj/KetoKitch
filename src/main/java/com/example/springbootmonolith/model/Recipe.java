package com.example.springbootmonolith.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")

@Entity
@Table(name = "recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String title;

    @Column
    private String img;

    @Column
    private String course;

    @Column
    private int prep_min;

    @Column
    private String net_carbs;

    @Column
    private String ingredients;

    @Column
    private String instructions;

    @Column
    private String difficulty;

    @Column
    private String keywords;


    @JsonIgnore
    @ManyToOne(fetch=FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    /**
     * recipe_id references comment table.
     */
    @JsonIgnore
    @OneToMany(mappedBy = "recipe",
            cascade = {CascadeType.MERGE, CascadeType.REFRESH,CascadeType.REMOVE})
    private List<Comment> comments;

    public List<Comment> addComment (Comment comment){
        if (comments == null)
            comments = new ArrayList<>();
        comments.add(comment);

        return comments;
    }


    public Recipe(){}

   public List<Comment> getComments(){return comments;}

   public void setComments(List<Comment> comments){this.comments = comments;}

    public User getUser(){return user;}

    public void setUser(User user){this.user = user;}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImg() { return img; }

    public void setImg(String img) { this.img = img; }

    public String getCourse() { return course; }

    public void setCourse(String course) { this.course = course; }

    public int getPrepMin() { return prep_min; }

    public void setPrepMin(int prep_min) { this.prep_min = prep_min; }

    public String getNetCarbs() { return net_carbs; }

    public void setNetCarbs(String net_carbs) { this.net_carbs = net_carbs; }

    public String getIngredients() { return ingredients; }

    public void setIngredients(String ingredients) { this.ingredients = ingredients; }

    public String getInstructions() { return instructions; }

    public void setInstructions(String instructions) { this.instructions = instructions; }

    public String getDifficulty() { return difficulty; }

    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getKeywords() { return keywords; }

    public void setKeywords(String keywords) { this.keywords = keywords; }
}
