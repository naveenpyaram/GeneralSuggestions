package com.SpringaSecurity.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.SpringaSecurity.entities.Features;

@Repository
public interface FeatureRepo extends JpaRepository<Features, Integer>{

	
}
