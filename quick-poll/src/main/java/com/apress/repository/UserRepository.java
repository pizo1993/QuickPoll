package com.apress.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.apress.domain.User;


public interface UserRepository extends CrudRepository<User, Long> {
	Optional<User> findByEmail(String email);
	Optional<User> findByConfirmationToken(String confirmationToken);
}