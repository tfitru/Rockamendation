package com.example.CrackAToa.Repository;

import com.example.CrackAToa.Models.Boulder_routes;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaginationBoulder extends PagingAndSortingRepository<Boulder_routes, Integer> {

}
