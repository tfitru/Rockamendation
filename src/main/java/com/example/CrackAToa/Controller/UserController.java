package com.example.CrackAToa.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.CrackAToa.Service.UserService;

import java.util.List;

@RestController
@RequestMapping("/Rock/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;


    // get the user information based on matching the username and password correctly
    // Post to save username and password
    // Put to change user information
    
}
