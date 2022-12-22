package com.example.CrackAToa.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.CrackAToa.Repository.BoulderRepo;

@Service
public class BoulderService {

    @Autowired
    BoulderRepo repo;

    public BoulderRepo getRepo(){
        return repo;
    }

}
