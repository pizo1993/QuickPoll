package com.apress.domain;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
public class Option {
@Id
@GeneratedValue
@Column(name="OPTION_ID")
private Long id;
@Column(name="OPTION_VALUE")
private String value;
// Getters and Setters omitted for brevity
}
