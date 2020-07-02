package com.astlaure.quizplatform.controllers;

import com.astlaure.quizplatform.exceptions.BadValidationDataException;
import com.astlaure.quizplatform.models.AnswerResponse;
import com.astlaure.quizplatform.models.QuizRequest;
import com.astlaure.quizplatform.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public ResponseEntity<?> getAllQuiz() {
        return ResponseEntity.status(200).body(quizService.findAll());
    }

    @GetMapping("/summaries")
    public ResponseEntity<?> getQuizSummaries(@RequestParam(value = "page", defaultValue = "0", required = false) int page,
                                              @RequestParam(value = "size", defaultValue = "5", required = false) int size) {
        return ResponseEntity.status(200).body(quizService.findSummaryPage(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuiz(@PathVariable("id") Long id) {
        return ResponseEntity.status(200).body(quizService.findOne(id));
    }

    @PostMapping("/{id}/answers")
    public ResponseEntity<?> answers(@PathVariable("id") Long id, @RequestBody Map<Long, Long> request) throws BadValidationDataException {
        int value = quizService.validateAnswers(id, request);

        AnswerResponse response = new AnswerResponse();
        response.setResult(value);

        return ResponseEntity.status(200).body(response);
    }

    @PostMapping
    public ResponseEntity<?> postQuiz(@RequestBody QuizRequest request) {
        return ResponseEntity.status(201).build();
    }
}
