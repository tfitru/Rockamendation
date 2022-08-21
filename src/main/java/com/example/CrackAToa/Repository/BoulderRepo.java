package com.example.CrackAToa.Repository;

import com.example.CrackAToa.Models.Boulder_routes;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public interface BoulderRepo extends JpaRepository<Boulder_routes, Integer> {

    List<Boulder_routes> findByGrading(String grading);

    List<Boulder_routes> findByGradingAndState(String grading, String state);

    List<Boulder_routes> findByState(String state);

    List<Boulder_routes> findByStateAndGorge(String state, String gorge);

    Page<Boulder_routes> findByGradingContains(String grading, String state, Pageable pageable);
}
