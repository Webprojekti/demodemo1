package com.group4.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.group4.fullstack.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
