package com.astlaure.quizplatform.repositories;

import com.astlaure.quizplatform.entities.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
}
