package com.example.CrackAToa.Controller;

import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Service.BoulderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/Rock")
public class BoulderController {

    @Autowired
    BoulderService boulderService;

    List<Boulder_routes> boulder_routesList;


    @GetMapping("/allB")
    public @ResponseBody List<Boulder_routes> All() {

        boulder_routesList = boulderService.getRepo().findAll();

        return boulderService.getRepo().findAll();
    }

    @GetMapping("/allB/{id}")
    public @ResponseBody Optional<Boulder_routes> byId(@PathVariable int id) {
        return boulderService.getRepo().findById(id);
    }

    @GetMapping("/grading")
    public @ResponseBody List<String> findByGrade() {
        List<String> ranking = new ArrayList<>();
        for(int i = 0 ; i<boulder_routesList.size();i++){
            ranking.add(boulder_routesList.get(i).getGrading());
        }
        return ranking;
    }


}
