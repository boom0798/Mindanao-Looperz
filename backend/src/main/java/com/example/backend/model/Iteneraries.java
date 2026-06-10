package com.example.backend.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "iteneraries")
@Data
public class Iteneraries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 100, message = "Name must be between 3 and 100 characters")
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "is_featured", nullable = true, 
        columnDefinition = "BOOLEAN DEFAULT FALSE"
    )
    private Boolean featured = false;
    
    @DecimalMin(value = "0.0", message = "Must be positive")
    @Column(name = "distance", nullable = true)
    private double distance;

    @DecimalMin(value = "0.0", message = "Must be positive")
    @Column(name = "duration", nullable = true)
    private double duration;

    @DecimalMin(value = "0.0", message = "Must be positive")
    @NotBlank(message = "Price is required")
    @Column(name = "price", nullable = false)
    private double price;

    public enum Difficulty {Easy, Intermediate, Hard}
    @Column(name = "difficulty", nullable = false)
    private Difficulty difficulty;

    @Size(min = 3, max = 100, message = "Terrain must be between 3 and 100 characters")
    @Column(name = "terrain", nullable = true) 
    private String terrain;

    @Size(min = 10, max = 300, message = "Overview must be between 10 and 300 characters")
    @NotBlank(message = "Overview is required")
    @Column(name = "overview", nullable = false)
    private String overview;

    @Column(name = "Type", nullable = true)
    private String type;

    @Version
    private Long version;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    //Relationships
    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL)
    @Size(min = 1, message = "At least one image is required")
    private List<IteneraryImages> images = new ArrayList<>();

    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL)
    private List<IteneraryHighlights> highlights = new ArrayList<>();

    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL)
    private List<IteneraryRequirements> requirements = new ArrayList<>();
}
