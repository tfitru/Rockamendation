package com.example.CrackAToa.Service;

import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Pagination.PaginationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.CrackAToa.Repository.BoulderRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoulderService {

    @Autowired
    BoulderRepo repo;

    public BoulderRepo getRepo(){
        return repo;
    }

    public List<Boulder_routes> getAllRocks(Integer pageNo, Integer pageSize, String sortBy){
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

        Page<Boulder_routes> pagedResult = repo.findAll(paging);

        if(pagedResult.hasContent()){
            return pagedResult.getContent();
        } else {
            return new ArrayList<Boulder_routes>();
        }

    }

    public PaginationResponse filterRoutes(String grading, String state,  Pageable pageable){

        Page<Boulder_routes> routes = repo.findByGradingContains(grading,state, pageable);
        return PaginationResponse.builder()
                .numberOfItems(routes.getNumberOfElements())
                .numberOfPages(routes.getTotalPages())
                .boulder_routesList(routes.getContent())
                .build();
    }

}
