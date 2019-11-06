package com.example.KetoKitch.repositories;

import com.example.KetoKitch.models.UserRole;
import org.springframework.data.repository.CrudRepository;

public interface UserRoleRepository extends CrudRepository<UserRole, Integer> {

    public UserRole findByName(String name);
}
