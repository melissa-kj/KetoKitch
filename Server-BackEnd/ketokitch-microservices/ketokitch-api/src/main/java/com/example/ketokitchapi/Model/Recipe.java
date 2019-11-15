package com.example.ketokitchapi.Model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table( name = "recipe")
public class Recipe {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column
    private String image;

    @Column
    private String prep_time;

    @Column
    private String net_carbs;

    @Column
    private String ingredients;

    @Column
    private String instructions;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    public Recipe() {}

    public Long getId(){ return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) {this.title = title;}

    public String getPrep_time() { return prep_time; }
    public void setPrep_time(String prep_time) {this.prep_time = prep_time; }

    public String getImage() { return image; }
    public void setImage(String image) {this.image = image;}

    public String getNet_carbs() { return net_carbs; }
    public void setNet_carbs(String net_carbs) {this.net_carbs = net_carbs; }

    public String getInstructions() { return instructions; }
    public void setInstructions(String instructions) {this.instructions = instructions; }

    public User getUser() { return user; }
    public void setUser(User user) {this.user = user; }

    public String getIngredients() { return ingredients; }
    public void setIngredients(String ingredients) {this.ingredients = ingredients; }
}
