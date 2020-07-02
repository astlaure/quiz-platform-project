package com.astlaure.quizplatform.handlers;

import com.astlaure.quizplatform.exceptions.BadValidationDataException;
import com.astlaure.quizplatform.exceptions.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(Exception ex) {
        return ResponseEntity.status(404).build();
    }

    @ExceptionHandler(BadValidationDataException.class)
    public ResponseEntity<?> handleBadValidationDataException(Exception ex) {
        return ResponseEntity.status(400).build();
    }
}
