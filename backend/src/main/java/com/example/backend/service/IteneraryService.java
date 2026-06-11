package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Iteneraries;
import com.example.backend.model.IteneraryHighlights;
import com.example.backend.model.IteneraryImages;
import com.example.backend.model.IteneraryRequirements;
import com.example.backend.repository.IteneraryRepository;
import com.example.backend.specification.ItenerarySpecification;

import jakarta.transaction.Transactional;

@Service
public class IteneraryService {

    @Autowired
    private IteneraryRepository iteneraryRepository;

    private static final List<String> ALLOWED_SORT_FIELDS = 
        List.of("name", "price", "createdAt");

    public List<Iteneraries> IteneraryView(
        String name, 
        Iteneraries.Difficulty difficulty,
        String terrain,
        String type,
        Boolean featured,
        String sortBy,
        String sortDir
    ){
        String safeStortBy = ALLOWED_SORT_FIELDS.contains(sortBy) ? sortBy : "createdAt" ;
        
        Sort sort = Sort.by(
            "desc".equalsIgnoreCase(sortDir) ? Sort.Direction.DESC : Sort.Direction.ASC,
            safeStortBy
        );

        Specification<Iteneraries> spec = ItenerarySpecification.filterBy(
            name, difficulty, terrain, type, featured
        );

        return iteneraryRepository.findAll(spec, sort);
    }

    public Iteneraries getIteneraryById(Long id) {
        return iteneraryRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Itenerary not found"));
    }

    public Iteneraries createItenerary(Iteneraries itenerary){
        return iteneraryRepository.save(itenerary);
    } 
    
    @Transactional
    public Iteneraries updateItenerary(Long id, Iteneraries itenerary){
        Iteneraries existing = iteneraryRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Itenerary not found"));
        
        existing.setName(itenerary.getName());
        existing.setFeatured(itenerary.getFeatured());
        existing.setDistance(itenerary.getDistance());
        existing.setDuration(itenerary.getDuration());
        existing.setPrice(itenerary.getPrice());
        existing.setDifficulty(itenerary.getDifficulty());
        existing.setTerrain(itenerary.getTerrain());
        existing.setOverview(itenerary.getOverview());
        existing.setType(itenerary.getType());

        if (itenerary.getImages() != null) {
            existing.getImages().clear();
            for (IteneraryImages img : itenerary.getImages()) {
                img.setItinerary(existing);
                existing.getImages().add(img);
            }
        }

        if (itenerary.getHighlights() != null) {
            existing.getHighlights().clear();
            for (IteneraryHighlights highlights : itenerary.getHighlights()) {
                highlights.setItinerary(existing);
                existing.getHighlights().add(highlights);
            }
        }

        if (itenerary.getRequirements() != null) {
            existing.getRequirements().clear();
            for(IteneraryRequirements requirements : itenerary.getRequirements()) {
                requirements.setItinerary(existing);
                existing.getRequirements().add(requirements);
            }
        }

        return iteneraryRepository.save(existing);

    }

    public void delete(Long id) {
        if (!iteneraryRepository.existsById(id)){
            throw new ResourceNotFoundException("Itenerary not found");
        }
        iteneraryRepository.deleteById(id);
    }

}
