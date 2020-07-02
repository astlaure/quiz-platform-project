package com.astlaure.quizplatform.entities;

import com.astlaure.quizplatform.enums.QuestionType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "questions")
@Getter
@Setter
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String value;

    @Enumerated(EnumType.STRING)
    private QuestionType type;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "question")
    private List<Choice> choices;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;
}
