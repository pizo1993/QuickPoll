package com.apress.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apress.domain.User;
import com.apress.repository.UserRepository;

@Service("userService")
public class UserService {

	private UserRepository userRepository;
	
    @Autowired
    public UserService(UserRepository userRepository) { 
      this.userRepository = userRepository;
    }
    
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public User save(User user) {
		return userRepository.save(user);
	}

}