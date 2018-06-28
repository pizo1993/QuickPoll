package com.apress.controller;

import java.net.URI;
import java.util.Optional;

import javax.inject.Inject;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.apress.domain.User;
import com.apress.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Inject
	private UserRepository userRepository;
	
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public ResponseEntity<Iterable<User>> getAllUsers() {
		Iterable<User> allUsers = userRepository.findAll();
		//return new ResponseEntity<>(pollRepository.findAll(), HttpStatus.OK);
		return new ResponseEntity<>(allUsers, HttpStatus.OK);
	}

	@RequestMapping(value="/users", method=RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User user) {
		user = userRepository.save(user);
		// Set the location header for the newly created resource
		HttpHeaders responseHeaders = new HttpHeaders();
		URI newUserUri = ServletUriComponentsBuilder
		.fromCurrentRequest()
		.path("/{id}")
		.buildAndExpand(user.getId())
		.toUri();
		responseHeaders.setLocation(newUserUri);
		return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping(value="/users/{userId}", method=RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable Long userId) {
		Optional<User> u = userRepository.findById(userId);
		return new ResponseEntity<> (u, HttpStatus.OK);
	}
	

	@RequestMapping(value="/users/{userId}", method=RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable Long userId) {
		// Save the entity
		User u = userRepository.save(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping(value="/users/{userId}", method=RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
		userRepository.deleteById(userId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
