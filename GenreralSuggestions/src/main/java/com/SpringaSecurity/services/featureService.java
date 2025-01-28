package com.SpringaSecurity.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.SpringaSecurity.entities.Comment;
import com.SpringaSecurity.entities.Features;
import com.SpringaSecurity.entities.User;
import com.SpringaSecurity.repo.CommentRepository;
import com.SpringaSecurity.repo.FeatureRepo;
import com.SpringaSecurity.repo.UserRepository;

@Service
public class featureService {
	@Autowired
	private FeatureRepo featuresRepository;
	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private UserRepository userRepository;
	public Features addfeature(Features feature, String username) {
		 User user = userRepository.findByUsername(username); 
	        feature.setCreatedBy(user); 
	        return featuresRepository.save(feature);
	}
	public List<Features> getAllFeatures() {
		// TODO Auto-generated method stub
		return featuresRepository.findAll();
	}
	
	
	 public Features incrementVote(int id) {
	        System.out.println("Incrementing vote for feature ID: " + id);
	        Features feature = featuresRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Feature with ID " + id + " not found."));
	        
	        feature.setVotes(feature.getVotes() + 1);
	        Features savedFeature = featuresRepository.save(feature);
	        System.out.println("Votes updated. New votes: " + savedFeature.getVotes());
	        return savedFeature;
	    }
    
    public Features addComment(int featureId, Comment comment) {
        Features feature = featuresRepository.findById(featureId)
            .orElseThrow(() -> new RuntimeException("Feature not found"));
        comment.setFeature(feature);
        comment.setCreatedAt(LocalDateTime.now());
        commentRepository.save(comment);
        return featuresRepository.findById(featureId).get();
    }

	
	
}
