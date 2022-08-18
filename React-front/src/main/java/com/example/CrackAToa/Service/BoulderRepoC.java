package com.example.CrackAToa.Service;

import com.example.CrackAToa.Service.BoulderService;
import org.springframework.beans.factory.annotation.Autowired;

public class BoulderRepoC {

    @Autowired
    private BoulderService boulderService;

    public BoulderService getBoulderService() {

        return boulderService;
    }


}
