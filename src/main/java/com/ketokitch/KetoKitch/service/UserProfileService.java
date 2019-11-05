package com.ketokitch.KetoKitch.service;

import com.ketokitch.KetoKitch.models.UserProfile;

public interface UserProfileService {

    public UserProfile createUserProfile(String username, UserProfile newProfile);

    public UserProfile getUserProfile(String username);
}
