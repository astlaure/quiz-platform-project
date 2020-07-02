package com.astlaure.quizplatform.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChoiceRequest {
    private String value;
    private int points;
    private boolean answer;
    private String response;
}
