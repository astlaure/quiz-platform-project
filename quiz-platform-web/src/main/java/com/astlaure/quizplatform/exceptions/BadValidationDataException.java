package com.astlaure.quizplatform.exceptions;

public class BadValidationDataException extends Exception {
    public BadValidationDataException() {
        super("Bad data when calculating the result.");
    }
}
