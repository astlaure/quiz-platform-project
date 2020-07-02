package com.astlaure.quizplatform.configurations;

import com.astlaure.quizplatform.filters.JsonUsernamePasswordFilter;
import com.astlaure.quizplatform.handlers.RestLoginFailureHandler;
import com.astlaure.quizplatform.handlers.RestLoginSuccessHandler;
import com.astlaure.quizplatform.handlers.RestLogoutHandler;
import com.astlaure.quizplatform.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserService userService;

    @Autowired
    public SecurityConfig(UserService userService) {
        this.userService = userService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Bean
    public JsonUsernamePasswordFilter authenticationFilter() throws Exception {
        JsonUsernamePasswordFilter filter = new JsonUsernamePasswordFilter();

        filter.setFilterProcessesUrl("/api/security/login");
        filter.setAuthenticationSuccessHandler(new RestLoginSuccessHandler());
        filter.setAuthenticationFailureHandler(new RestLoginFailureHandler());
        filter.setAuthenticationManager(authenticationManager());

        return filter;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userService)
                .passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/tasks").permitAll() // TODO
                .antMatchers("/api/security/user", "/api/tasks/**").authenticated()
                .anyRequest().permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new Http403ForbiddenEntryPoint())
                .and()
                .logout()
                .logoutUrl("/api/security/logout")
                .logoutSuccessHandler(new RestLogoutHandler());

        http.addFilterBefore(authenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
