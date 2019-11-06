package com.example.KetoKitch.service;

import com.example.KetoKitch.models.UserRole;

public interface UserRoleService {

    public UserRole createRole(UserRole newRole);

    public UserRole getRole(String roleName);
}
