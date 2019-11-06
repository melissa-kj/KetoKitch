package com.example.KetoKitch.service;

import com.example.KetoKitch.models.User;
import com.example.KetoKitch.models.UserProfile;
import com.example.KetoKitch.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    UserService userService;

    @Override
    public UserProfile createUserProfile(String username, UserProfile newProfile) {
        User user = userService.getUser(username);
        newProfile.setUser(user);
        return userProfileRepository.save(newProfile);
//        user.setUserProfile(newProfile);
//        return userService.createUser(user).getUserProfile();
    }

    @Override
    public UserProfile getUserProfile(String username) {
        return userProfileRepository.findProfileByUsername(username);
    }
}
