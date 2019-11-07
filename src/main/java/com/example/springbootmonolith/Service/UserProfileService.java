package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.model.UserProfile;

public interface UserProfileService {


    public UserProfile createUserProfile(String username, UserProfile newProfile)throws Exception;


    public UserProfile getUserProfile(String username);


}
