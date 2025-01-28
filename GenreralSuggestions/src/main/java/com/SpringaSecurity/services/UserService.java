package com.SpringaSecurity.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.SpringaSecurity.Exceptions.InvalidInputException;
import com.SpringaSecurity.Exceptions.UserAlreadyExistsException;
import com.SpringaSecurity.entities.User;
import com.SpringaSecurity.repo.UserRepository;
@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	 
	 private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
	   
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new UserPrincipal(user);
    }

    public User register(User user) {
    	 if (user.getUsername() == null || user.getUsername().length() < 3) {
             throw new InvalidInputException("Username must be at least 3 characters long");
         }
         if (user.getPassword() == null || user.getPassword().length() < 6) {
             throw new InvalidInputException("Password must be at least 6 characters long");
         }
         if (user.getRole() == null || user.getRole().isBlank()) {
             throw new InvalidInputException("Role is required");
         }

         // Check if the user already exists
         if (userRepository.findByUsername(user.getUsername()) != null) {
             throw new UserAlreadyExistsException("User already exists");
         }
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

}
