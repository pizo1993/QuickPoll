package com.apress.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.apress.domain.User;
import com.apress.repository.UserRepository;

@Service("userService")
public class UserService {

	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository) {
      this.userRepository = userRepository;
    }

	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public Iterable<User> findAll() {
		return userRepository.findAll();
	}

	
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}

	public User save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}
	
	public void deleteById(Long id) {
		userRepository.deleteById(id);
	}
	

	

}
