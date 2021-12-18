package com.xclusive.ppmtool.services;

import com.xclusive.ppmtool.domain.User;
import com.xclusive.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {
        newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

        // username has to be unique ( need Exception handler)
        // Make sure that password and confirmPassword match
        // We dont persist or show the confirmPassword

        return userRepository.save(newUser);
    }
}
