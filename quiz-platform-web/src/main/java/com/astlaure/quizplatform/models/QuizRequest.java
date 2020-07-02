package com.astlaure.quizplatform.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuizRequest {
    private String name;
    private List<QuestionRequest> questions;
}
