package com.example.CrackAToa.Repository;

import com.example.CrackAToa.Service.BoulderService;
import org.springframework.beans.factory.annotation.Autowired;

public class BoulderRepoC {

    @Autowired
    BoulderService boulderService;

    public BoulderService getBoulderService() {

        return boulderService;
    }


}
