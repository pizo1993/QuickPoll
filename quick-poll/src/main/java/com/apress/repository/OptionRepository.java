package com.apress.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apress.domain.Option;
/**
 * @author kamal berriga
 *
 */
/* this the user  Repository interface  */
@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {


}
