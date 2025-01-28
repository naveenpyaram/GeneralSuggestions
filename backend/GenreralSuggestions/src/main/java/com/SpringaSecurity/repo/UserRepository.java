package com.SpringaSecurity.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.SpringaSecurity.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByUsername( String username);



}
