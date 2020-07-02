package com.astlaure.quizplatform.exceptions;

public class NotFoundException extends Exception {
    public NotFoundException() {
        super("The element was not found.");
    }
}
