package com.example.backend.specification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.example.backend.model.Iteneraries;

import jakarta.persistence.criteria.Predicate;

public class ItenerarySpecification {
    public static Specification <Iteneraries> filterBy(
        String name,
        Iteneraries.Difficulty difficulty,
        String terrain,
        String type, 
        Boolean featured
    ){
        return (root, query, cb) -> {
            List <Predicate> predicates = new ArrayList<>();

            if (name != null && !name.isBlank())
                predicates.add(cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%"));

            if (difficulty != null)
                predicates.add(cb.equal(root.get("difficulty"), difficulty));

            if (terrain != null && !terrain.isBlank())
                predicates.add(cb.like(cb.lower(root.get("terrain")), "%" + terrain.toLowerCase() + "%"));

            if (type != null && !type.isBlank())
                predicates.add(cb.equal(cb.lower(root.get("type")), type.toLowerCase()));

            if (featured != null)
                predicates.add(cb.equal(root.get("featured"), featured));

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
