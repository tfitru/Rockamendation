package com.example.CrackAToa.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CrackAToa.Repository.UserRepo;


@Service
public class UserService {


    @Autowired
    private UserRepo userRepo;


    
}
