package com.astlaure.quizplatform.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "choices")
@Getter
@Setter
public class Choice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String value;

    private int points;

    private boolean answer = false;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
}
