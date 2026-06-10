package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Iteneraries;

@Repository
public interface IteneraryRepository extends JpaRepository<Iteneraries, Long>{

    List <Iteneraries> findByFeaturedTrue();

    List <Iteneraries> findByDifficulty(Iteneraries.Difficulty difficulty);

    List <Iteneraries> findByType (String type);

    List <Iteneraries> findByName (String name);

    List <Iteneraries> findByTerrain (String terrain);

    List <Iteneraries> sortByPrice (String sort);
    

}
