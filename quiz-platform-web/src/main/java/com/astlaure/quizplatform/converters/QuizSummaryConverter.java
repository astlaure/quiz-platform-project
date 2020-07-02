package com.astlaure.quizplatform.converters;

import com.astlaure.quizplatform.entities.Quiz;
import com.astlaure.quizplatform.models.QuizSummaryResponse;
import org.springframework.stereotype.Component;

@Component
public class QuizSummaryConverter {

    public QuizSummaryResponse convert(Quiz quiz) {
        QuizSummaryResponse response = new QuizSummaryResponse();
        response.setId(quiz.getId());
        response.setName(quiz.getName());
        response.setCreationDate(quiz.getCreationDate());
        response.setLength(quiz.getQuestions().size());

        return response;
    }
}
