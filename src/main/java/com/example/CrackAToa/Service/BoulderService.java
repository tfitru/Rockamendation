package com.example.CrackAToa.Service;

import com.example.CrackAToa.Repository.BoulderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoulderService {

    @Autowired
    BoulderRepo repo;

    public BoulderRepo getRepo() {
        return repo;
    }

    public void setRepo(BoulderRepo repo) {
        this.repo = repo;
    }

}
