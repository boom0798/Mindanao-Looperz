package com.example.backend.service;

import com.example.backend.exception.DuplicateEmailException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Admin;
import com.example.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    public Optional<Admin> getAdminByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    public Admin createAdmin(Admin admin) {
        if (adminRepository.existsByEmail(admin.getEmail())) {
            throw new DuplicateEmailException("Email " + admin.getEmail() + " already exists");
        }
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Long id, Admin admin) {
        Admin existing = adminRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Admin with id " + id + " not found"));
        existing.setName(admin.getName());
        existing.setEmail(admin.getEmail());
        existing.setRole(admin.getRole());
        return adminRepository.save(existing);
    }

    public void deleteAdmin(Long id) {
        if (!adminRepository.existsById(id)) {
            throw new ResourceNotFoundException("Admin with id " + id + " not found");
        }
        adminRepository.deleteById(id);
    }

    public Admin deactivateAdmin(Long id) {
        Admin admin = adminRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Admin with id " + id + " not found"));
        admin.setIsActive(false);
        return adminRepository.save(admin);
    }
}