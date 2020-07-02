package com.astlaure.quizplatform.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuizResponse {
    private Long id;
    private String name;
    private List<QuestionResponse> questions;
}
