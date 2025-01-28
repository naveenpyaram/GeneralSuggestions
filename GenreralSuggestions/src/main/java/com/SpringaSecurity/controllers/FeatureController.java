package com.SpringaSecurity.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SpringaSecurity.entities.Comment;
import com.SpringaSecurity.entities.Features;
import com.SpringaSecurity.entities.User;
import com.SpringaSecurity.repo.UserRepository;
import com.SpringaSecurity.services.featureService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class FeatureController {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private featureService featureService; 

    @PostMapping("/addfeature")
    public Features addFeature(@RequestBody Features feature, @RequestHeader("Username") String username) {
    	feature.setVotes(0); 
    	 Features  savedfeature = featureService.addfeature(feature,username);
    	 return savedfeature; 
    }
    @GetMapping("/getall")
    public ResponseEntity<List<Features>> getAllFeatures() {
        List<Features> features = featureService.getAllFeatures();
       
        return new ResponseEntity<>(features, HttpStatus.OK);
    }
    @PostMapping("/{id}/vote")
    public ResponseEntity<Features> voteForFeature(@PathVariable int id) {
        try {
            System.out.println("Received vote request for feature ID: " + id);
            Features updatedFeature = featureService.incrementVote(id);
            System.out.println("Successfully updated votes for feature ID: " + id);
            return ResponseEntity.ok(updatedFeature);
        } catch (RuntimeException e) {
            System.err.println("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    @PostMapping("/{featureId}/comments")
    public Features addComment(@PathVariable int featureId, @RequestBody Comment comment) {
        return featureService.addComment(featureId, comment);
    }
   
}
