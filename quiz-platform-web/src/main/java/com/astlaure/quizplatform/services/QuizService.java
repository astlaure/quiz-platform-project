package com.astlaure.quizplatform.services;

import com.astlaure.quizplatform.converters.QuizConverter;
import com.astlaure.quizplatform.entities.Choice;
import com.astlaure.quizplatform.entities.Question;
import com.astlaure.quizplatform.entities.Quiz;
import com.astlaure.quizplatform.exceptions.BadValidationDataException;
import com.astlaure.quizplatform.models.QuizRequest;
import com.astlaure.quizplatform.models.QuizResponse;
import com.astlaure.quizplatform.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuizService {

    private final QuizRepository quizRepository;
    private final QuizConverter quizConverter;

    @Autowired
    public QuizService(QuizRepository quizRepository, QuizConverter quizConverter) {
        this.quizRepository = quizRepository;
        this.quizConverter = quizConverter;
    }

    public List<QuizResponse> findAll() {
        return quizRepository.findAll().stream()
                .map(quizConverter::convert)
                .collect(Collectors.toList());
    }

    public QuizResponse findOne(Long id) {
        Optional<Quiz> quiz = quizRepository.findById(id);

        if (quiz.isEmpty()) {
            return null;
        }

        return quizConverter.convert(quiz.get());
    }

    public int validateAnswers(Long id, Map<Long, Long> request) throws BadValidationDataException {
        Optional<Quiz> quiz = quizRepository.findById(id);

        if (quiz.isEmpty()) {
            throw new BadValidationDataException();
        }

        int result = 0;
        for (long questionID : request.keySet()) {
            Optional<Question> matchingQuestion = quiz.get().getQuestions().stream()
                    .filter(question -> question.getId().equals(questionID))
                    .findFirst();

            if (matchingQuestion.isEmpty()) {
                throw new BadValidationDataException();
            }

            Optional<Choice> matchingChoice = matchingQuestion.get().getChoices().stream()
                    .filter(choice -> choice.getId().equals(request.get(questionID)))
                    .findFirst();

            if (matchingChoice.isEmpty()) {
                throw new BadValidationDataException();
            }

            result += matchingChoice.get().getPoints();
        }

        return (int) Math.floor((double) result / ((double) quiz.get().getQuestions().size() * 10) * 100); // TODO
    }

    public void create(QuizRequest request) {
        quizRepository.save(quizConverter.convert(request));
    }
}
