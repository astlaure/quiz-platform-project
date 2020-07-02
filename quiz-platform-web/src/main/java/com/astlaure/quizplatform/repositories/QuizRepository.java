package com.astlaure.quizplatform.repositories;

import com.astlaure.quizplatform.entities.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByOrderByCreationDateDesc();
}
