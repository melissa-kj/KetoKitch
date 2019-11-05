package com.ketokitch.KetoKitch.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_profile_id")
    private UserProfile userProfile;

    @ManyToMany(fetch = FetchType.LAZY,
                cascade = {CascadeType.DETACH,
                        CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(name = "user_recipes",
    joinColumns = {@JoinColumn(name = "user_id")},
    inverseJoinColumns = @JoinColumn(name = "recipe_id"))

    private List<Recipe> recipes;

    public User() {}

    public List<Recipe> addRecipe(Recipe recipe){
        if(recipes == null)
            recipes = new ArrayList<>();
        recipes.add(recipe);

        return recipes;
    }

    public List<Recipe> getRecipes() { return recipes; }

    public void setRecipes(List<Recipe> recipes) {this.recipes = recipes; }

    public UserProfile getUserProfile() { return userProfile; }

    public void setUserProfile(UserProfile userProfile) { this.userProfile = userProfile; }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }
}
