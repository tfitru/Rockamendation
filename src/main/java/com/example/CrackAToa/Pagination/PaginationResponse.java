package com.example.CrackAToa.Pagination;

import com.example.CrackAToa.Models.Boulder_routes;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PaginationResponse {
    private List<Boulder_routes> boulder_routesList;
    private Integer numberOfItems;
    private int numberOfPages;
}
