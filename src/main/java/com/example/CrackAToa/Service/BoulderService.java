package com.example.CrackAToa.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Repository.BoulderRepo;



@Service
public class BoulderService {

    @Autowired
    BoulderRepo repo;

    public BoulderRepo getRepo(){
        return repo;
    }

}
