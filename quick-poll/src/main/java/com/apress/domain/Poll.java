package com.apress.domain;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy ;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Data;

@Data
@Table(
		   name = "POLL", 
		   uniqueConstraints = {@UniqueConstraint(columnNames = {"USER_ID", "QUESTION"})}
		)

@Entity
public class Poll {
	@Id
	@GeneratedValue
	@Column(name="POLL_ID")
	private Long id;
	
	
	@ManyToOne
	@JoinColumn(name="USER_ID", nullable = false)
	private User user_id;
	
	@Column(name="QUESTION")
	private String question;
	

	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="POLL_ID")
	@OrderBy
	private Set<Option> options;
	// Getters and Setters omitted for brevity
}