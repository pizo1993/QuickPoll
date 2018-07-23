package com.apress.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apress.domain.Poll;
import com.apress.domain.User;
import com.apress.repository.PollRepository;


@Service("pollService")
public class PollService {
	
	private PollRepository pollRepository;
	
	@Autowired
	public PollService(PollRepository pollRepository) {
		this.pollRepository = pollRepository;
	}
	
	public Optional<Poll> findById (Long id) {
		return pollRepository.findById(id);
	}
	
	
	public List<Poll> findAll() {
		return pollRepository.findAll();
	}
	
	
	public Poll save(Poll poll) {
		return pollRepository.save(poll);
	}
	
	public void deleteById(Long id) {
		pollRepository.deleteById(id);
	}
	
	
	public Iterable<Poll> findByUserId(Long userId) {	
		return pollRepository.findByUserId(userId);
	}

}
