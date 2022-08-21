package com.example.CrackAToa.Repository;
import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Service.BoulderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoulderRepo extends JpaRepository<Boulder_routes, Integer> {

    List<Boulder_routes> findByGrading(String grading);

    List<Boulder_routes> findByGradingAndState(String grading, String state);

    List<Boulder_routes> findByState(String state);

    List<Boulder_routes> findByStateAndGorge(String state, String gorge);



   
}
