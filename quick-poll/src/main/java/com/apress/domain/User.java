package com.apress.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Transient;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "USER_ID")
	private Long id;
	
	@Column(name = "EMAIL", nullable = false, unique = true)
	@Email(message = "Please provide a valid e-mail")
	@NotEmpty(message = "Please provide an e-mail")
	private String email;
	
	@Column(name = "PASSWORD")
	@Transient
	private String password;
	
	@Column(name = "FIRST_NAME")
	@NotEmpty(message = "Please provide your first name")
	private String firstName;
	
	@Column(name = "LAST_NAME")
	@NotEmpty(message = "Please provide your last name")
	private String lastName;
	
	@Column(name = "ENABLED")
	private boolean enabled;
	
	@Column(name = "CONFIRMATION_TOKEN")
	private String confirmationToken;

}
