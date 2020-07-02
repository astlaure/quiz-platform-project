package com.astlaure.quizplatform.controllers;

import com.astlaure.quizplatform.entities.User;
import com.astlaure.quizplatform.models.AuthenticationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/security")
public class SecurityController {

    @GetMapping("/user")
    public ResponseEntity<?> user(Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        return ResponseEntity.status(200).body(AuthenticationResponse.builder()
                .username(user.getUsername())
                .role(user.getRole())
                .build());
    }
}
