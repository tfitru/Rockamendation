package com.example.CrackAToa.Repository;

import com.example.CrackAToa.Models.Boulder_routes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;

@Repository
public interface BoulderRepo extends JpaRepository<Boulder_routes, Integer> {


}
