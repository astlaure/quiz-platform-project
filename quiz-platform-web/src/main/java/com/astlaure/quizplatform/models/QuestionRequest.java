package com.astlaure.quizplatform.models;

import com.astlaure.quizplatform.enums.QuestionType;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionRequest {
    private String value;
    private QuestionType type;
    private List<ChoiceRequest> choices;
}
