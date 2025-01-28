package com.SpringaSecurity.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SpringaSecurity.entities.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
	
}