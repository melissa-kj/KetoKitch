package com.example.ketokitchapi.Model;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property ="id")
@Entity
@Table (name = "users")
public class User{
    /**
     * setting users datatable.
     **/
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true,
            nullable = false)
    private String username;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column
    private String location;

    @Column
    private String bio;

    @Column
    private String profilePic;

    @JsonIgnore
    @OneToMany (mappedBy = "user",
            cascade= {CascadeType.ALL})
    private List<Recipe> items;

    public List<Recipe> addItem (Recipe item){
        if (this.items == null)
            this.items = new ArrayList<>();
        items.add(item);

        return this.items;
    }

    public User(){}

    public List<Recipe> getItems() { return items;}

    public void setItems(List<Recipe> items) {this.items = items;}

    public Long getId () {return id;}

    public void setId (Long id) {this.id = id;}

    public String getUsername () {return username;}

    public void setUsername (String username) {this.username = username;}

    public String getEmail () {return email;}

    public void setEmail (String email) {this.email = email;}

    public String getPassword () {return password;}

    public void setPassword (String password) {this.password = password;}

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String  getProfilePic() { return profilePic;}

    public void setProfilePic(String profilePic) { this.profilePic = profilePic; }
}
