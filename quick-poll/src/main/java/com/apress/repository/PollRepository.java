package com.apress.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apress.domain.Poll;
import com.apress.domain.User;
/** 
 * @author kamal berriga
 *
 */
/* this the user  Repository interface  */ 
@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {
	
	public Optional<Poll> findById(Long id);
	public Optional<Poll> findByQuestion(String question);
	public Iterable<Poll> findByUserId(Long id);
	
}