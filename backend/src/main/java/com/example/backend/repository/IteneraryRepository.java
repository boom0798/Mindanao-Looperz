package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Iteneraries;

@Repository
public interface IteneraryRepository extends JpaRepository<Iteneraries, Long>,
    JpaSpecificationExecutor<Iteneraries>{
}

