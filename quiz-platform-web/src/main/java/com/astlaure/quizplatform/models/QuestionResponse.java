package com.astlaure.quizplatform.models;

import com.astlaure.quizplatform.enums.QuestionType;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionResponse {
    private Long id;
    private String value;
    private QuestionType type;
    private List<ChoiceResponse> choices;
}
