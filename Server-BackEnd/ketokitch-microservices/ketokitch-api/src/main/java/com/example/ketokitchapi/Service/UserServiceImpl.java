package com.example.ketokitchapi.Service;


import com.example.ketokitchapi.Config.JwtUtil;
import com.example.ketokitchapi.Model.Recipe;
import com.example.ketokitchapi.Model.User;
import com.example.ketokitchapi.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtil jwtUtil;

    @Override
    public String login(User user) throws Exception {
        User newUser = userRepository.findByUsername(user.getUsername());
        if (newUser != null && user.getPassword().equals(newUser.getPassword())) {
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());

            return jwtUtil.generateToken(userDetails);
        } else {
            throw new Exception("Username or Password are incorrect. Please try again.");
        }
    }

    @Override
    public String createUser(User newUser) throws Exception{
        newUser.setUsername(newUser.getUsername());
        newUser.setPassword(newUser.getPassword());
        newUser.setEmail(newUser.getEmail());
        newUser.setBio(newUser.getBio());
        newUser.setLocation(newUser.getLocation());
        newUser.setProfilePic(newUser.getProfilePic());
        if(userRepository.save(newUser) != null){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        else {
            throw new Exception("Username or Email already in use, please choose another.");
        }
    }

    @Override
    public Iterable<User> listUsers() {
            return userRepository.findAll();
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public HttpStatus deleteById(Long userId) {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }

    @Override
    public User findByUserId(Long userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public Iterable<Recipe> listUserItems(String username) {
        User user = getUser(username);
        return user.getItems();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getUser(username);

        if(user==null)
            throw new UsernameNotFoundException("User null");
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                true, true, true, true, getGrantedAuthorities(user));
    }

    /**
     *
     * @param user
     * @return
     */
    private List<GrantedAuthority> getGrantedAuthorities(User user){
        List<GrantedAuthority> authorities = new ArrayList<>();

        authorities.add(new SimpleGrantedAuthority(user.getUsername()));

        return authorities;
    }

}
