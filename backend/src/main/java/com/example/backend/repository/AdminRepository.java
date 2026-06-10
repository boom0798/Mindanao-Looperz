package com.example.backend.repository;

import com.example.backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    
    // Find admin by email (used for login)
    Optional<Admin> findByEmail(String email);
    
    // Check if email already exists (used for registration)
    boolean existsByEmail(String email);
    
    // Get all active admins
    List<Admin> findByIsActiveTrue();
    
    // Get all admins by role
    List<Admin> findByRole(String role);
}