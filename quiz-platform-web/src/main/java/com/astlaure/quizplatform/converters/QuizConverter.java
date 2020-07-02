package com.astlaure.quizplatform.converters;

import com.astlaure.quizplatform.entities.Choice;
import com.astlaure.quizplatform.entities.Question;
import com.astlaure.quizplatform.entities.Quiz;
import com.astlaure.quizplatform.models.ChoiceResponse;
import com.astlaure.quizplatform.models.QuestionResponse;
import com.astlaure.quizplatform.models.QuizRequest;
import com.astlaure.quizplatform.models.QuizResponse;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class QuizConverter {

    public QuizResponse convert(Quiz quiz) {
        QuizResponse quizResponse = new QuizResponse();
        quizResponse.setId(quiz.getId());
        quizResponse.setName(quiz.getName());
        quizResponse.setQuestions(quiz.getQuestions().stream()
                .map(question -> {
                    QuestionResponse questionResponse = new QuestionResponse();
                    questionResponse.setId(question.getId());
                    questionResponse.setValue(question.getValue());
                    questionResponse.setType(question.getType());
                    questionResponse.setChoices(question.getChoices().stream()
                            .map(choice -> {
                                ChoiceResponse choiceResponse = new ChoiceResponse();
                                choiceResponse.setId(choice.getId());
                                choiceResponse.setValue(choice.getValue());
                                return choiceResponse;
                            }).collect(Collectors.toList())
                    );
                    return questionResponse;
                }).collect(Collectors.toList())
        );

        return quizResponse;
    }

    public Quiz convert(QuizRequest request) {
        Quiz quiz = new Quiz();
        quiz.setName(request.getName());
        quiz.setQuestions(request.getQuestions().stream()
                .map(questionRequest -> {
                    Question question = new Question();
                    question.setValue(questionRequest.getValue());
                    question.setType(questionRequest.getType());
                    question.setChoices(questionRequest.getChoices().stream()
                            .map(choiceRequest -> {
                                Choice choice = new Choice();
                                choice.setValue(choiceRequest.getValue());
                                choice.setPoints(choiceRequest.getPoints());
                                choice.setAnswer(choiceRequest.isAnswer());
                                return choice;
                            }).collect(Collectors.toList())
                    );
                    return question;
                }).collect(Collectors.toList())
        );

        return quiz;
    }
}
