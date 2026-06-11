package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "itenerary_highlights")
@Data
public class IteneraryHighlights {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "highlights", nullable = false)
    @NotBlank(message = "Missing highlights text")
    @Size(min = 3, max = 100, message = "Highlights must be between 3 and 100 characters")
    private String highlights;

    @ManyToOne
    @JoinColumn(name = "itinerary_id", nullable = false)
    private Iteneraries itinerary;
}
