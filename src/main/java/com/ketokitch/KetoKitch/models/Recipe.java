package com.ketokitch.KetoKitch.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "recipe")
public class Recipe {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String title;

    @Column
    private String img;

    @Column
    private String course;

    @Column
    private Integer prep_min;

    @Column
    private Integer cook_min;

    @Column
    private Integer total_min;

    @Column
    private String ingredients;

    @Column
    private String instructions;

    @Column
    private String difficulty;

    @Column
    private String keywords;

    @ManyToMany(fetch = FetchType.LAZY,
    cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})

    @JoinTable(name = "user_recipes",
    joinColumns = {@JoinColumn(name = "recipe_id")},
    inverseJoinColumns = @JoinColumn(name = "user_id"))

    private List<User> users;

    public Recipe() { }

    public List<User> getUsers(){ return users; }

    public void setUsers(List<User> users) { this.users = users; }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getImg() { return img; }

    public void setImg(String img) { this.img = img; }

    public String getCourse() { return course; }

    public void setCourse(String course) { this.course = course; }

    public int getPrepMin() { return prep_min; }

    public void setPrepMin(int prep_min) { this.prep_min = prep_min; }

    public int getCookMin() { return cook_min; }

    public void setCookMin(int cook_min) { this.cook_min = cook_min; }

    public int getTotalMin() { return total_min; }

    public void setTotalMin(int total_min) { this.total_min = total_min; }

    public String getIngredients() { return ingredients; }

    public void setIngredients(String ingredients) { this.ingredients = ingredients; }

    public String getInstructions() { return instructions; }

    public void setInstructions(String instructions) { this.instructions = instructions; }

    public String getDifficulty() { return difficulty; }

    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getKeywords() { return keywords; }

    public void setKeywords(String keywords) { this.keywords = keywords; }
}
