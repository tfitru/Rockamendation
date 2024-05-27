package com.example.CrackAToa.Controller;

import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Repository.BoulderRepo;
import com.example.CrackAToa.Service.BoulderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/Rock")
@CrossOrigin(origins = "http://localhost:3000")
public class BoulderController {

    @Autowired
    BoulderService boulderRepo;
    @GetMapping("/Routes")
    public ResponseEntity<List<Boulder_routes>> getAllRocks(
            @RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(defaultValue = "grading") String sortBy
    ){
        List<Boulder_routes> list = boulderRepo.getAllRocks(pageNo, pageSize, sortBy);

        return new ResponseEntity<List<Boulder_routes>>(list, new HttpHeaders(), HttpStatus.OK);
    }

    //TODO figure out the filter
    @GetMapping("/Routes/search/filter")
    public ResponseEntity boulderRoutesWithFilter(@RequestParam String grading, @RequestParam String state, Pageable pageable){
        return ResponseEntity.ok(boulderRepo.filterRoutes(grading, state, pageable));
    }

    @GetMapping("/AllRoutes")
    public @ResponseBody ResponseEntity<List<Boulder_routes>> allRoutes() {
        return new ResponseEntity<List<Boulder_routes>>(boulderRepo.getRepo().findAll(),HttpStatus.OK);
    }

    @GetMapping("/AllRoutes/{grading}")
    public @ResponseBody ResponseEntity<List<Boulder_routes>> findByGrading(@PathVariable String grading){
        return new ResponseEntity<List<Boulder_routes>>(boulderRepo.getRepo().findByGrading(grading), HttpStatus.OK);
    }

    @GetMapping("/StateRoutes/{state}")
    public @ResponseBody ResponseEntity<List<Boulder_routes>> findByRouteByState(@PathVariable String state) {
        return new ResponseEntity<List<Boulder_routes>>(boulderRepo.getRepo().findByState(state), HttpStatus.OK);
    }
    
    @GetMapping("/StateGradeRoutes/{grading}/{state}")
    public @ResponseBody ResponseEntity<List<Boulder_routes>> findRoutesByGorgeState(@PathVariable String grading, @PathVariable String state) {
        return new ResponseEntity<List<Boulder_routes>>(boulderRepo.getRepo().findByGradingAndState(grading, state),HttpStatus.OK);
    }

    @GetMapping("/StateGorge/{state}/{gorge}")
    public @ResponseBody ResponseEntity<List<Boulder_routes>> findRoutesByGorgeStateGrade(@PathVariable String gorge, @PathVariable String state) {
        return new ResponseEntity<List<Boulder_routes>>(boulderRepo.getRepo().findByStateAndGorge(state, gorge),HttpStatus.OK);
    }


}
