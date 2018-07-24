package com.apress.controller;
import java.net.URI;
import java.util.Optional;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.apress.QuickPollApplication;
import com.apress.domain.Poll;
import com.apress.domain.User;
import com.apress.repository.PollRepository;
import com.apress.service.PollService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PollController {
	@Inject
	private PollService pollService;
	
	@Inject 
	private PollRepository pollRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(PollController.class);
	
	@RequestMapping(value="/polls", method=RequestMethod.GET)
	public ResponseEntity<Iterable<Poll>> getAllPolls() {
		logger.info("Request API /polls without Request Param");
		Iterable<Poll> allPolls = pollService.findAll();
		//return new ResponseEntity<>(pollRepository.findAll(), HttpStatus.OK);
		return new ResponseEntity<>(allPolls, HttpStatus.OK);
	}

	
	@RequestMapping(value="/polls", method=RequestMethod.GET, params = {"idUser"})
	public ResponseEntity<Iterable<Poll>> getAllPolls(@RequestParam(value="idUser") User idUser) {	
		logger.info("Request API /polls with Request Param: " + idUser);
		Iterable<Poll> allUsersPolls = pollService.findByUserId(idUser);
		//return new ResponseEntity<>(pollRepository.findAll(), HttpStatus.OK);
		return new ResponseEntity<>(allUsersPolls, HttpStatus.OK);
	}

	@RequestMapping(value="/polls", method=RequestMethod.POST)
	public ResponseEntity<?> createPoll(@RequestBody Poll poll) {
		poll = pollService.save(poll);
		// Set the location header for the newly created resource
		HttpHeaders responseHeaders = new HttpHeaders();
		URI newPollUri = ServletUriComponentsBuilder
		.fromCurrentRequest()
		.path("/{id}")
		.buildAndExpand(poll.getId())
		.toUri();
		responseHeaders.setLocation(newPollUri);
		return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping(value="/polls/{pollId}", method=RequestMethod.GET)
	public ResponseEntity<?> getPoll(@PathVariable Long pollId) {
		Optional<Poll> p = pollService.findById(pollId);
		return new ResponseEntity<> (p, HttpStatus.OK);
	}
	
/*	
	@RequestMapping(value="/{userId}/polls", method=RequestMethod.GET)
	public ResponseEntity<?> getPollByUserId(@PathVariable Long userId) {
		Iterable<Poll> p = pollService.findByUserId(userId);
		return new ResponseEntity<> (p, HttpStatus.OK);
	}
*/
	@RequestMapping(value="/polls/{pollId}", method=RequestMethod.PUT)
	public ResponseEntity<?> updatePoll(@RequestBody Poll poll, @PathVariable Long pollId) {
		// Save the entity
		Poll p = pollService.save(poll);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	
	@RequestMapping(value="/polls/{pollId}", method=RequestMethod.DELETE)
	public ResponseEntity<?> deletePoll(@PathVariable Long pollId) {
		pollService.deleteById(pollId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

