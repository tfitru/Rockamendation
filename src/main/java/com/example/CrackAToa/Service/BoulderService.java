package com.example.CrackAToa.Service;

import com.example.CrackAToa.Models.Boulder_RoutesMap;
import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Repository.BoulderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class BoulderService {

    @Autowired
    BoulderRepo repo;
    @Autowired
    JdbcTemplate jdbcTemplate;


    public BoulderRepo getRepo() {
        return repo;
    }

    public void setRepo(BoulderRepo repo) {
        this.repo = repo;
    }

}
