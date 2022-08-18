package com.example.CrackAToa.Models;

import org.springframework.jdbc.core.RowMapper;

import javax.persistence.Column;
import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Boulder_RoutesMap implements RowMapper<Boulder_routes> {


//    private Integer id;
//    private String route;
//    private String grading;
//    private BigDecimal areaLatitude;
//    private BigDecimal areaLongitude;
//    private String state;
//    private String gorge;
//    private String area;
//    private String crag;
//    @Column(name="Subcrag")
//    private String subCrag;
//    private String description;
//    private String url;


    @Override
    public Boulder_routes mapRow(ResultSet rs, int rowNum) throws SQLException {
        Boulder_routes boulder = new Boulder_routes();
        boulder.setId(rs.getInt("id"));
        boulder.setRoute(rs.getString("Route"));
        boulder.setGrading(rs.getString("Grading"));
        boulder.setAreaLatitude(rs.getBigDecimal("Area_Latitude"));
        boulder.setAreaLongitude(rs.getBigDecimal("Area_Longitude"));
        boulder.setState(rs.getString("State"));
        boulder.setGorge(rs.getString("Gorge"));
        boulder.setArea(rs.getString("Area"));
        boulder.setCrag(rs.getString("Crag"));
        boulder.setSubCrag(rs.getString("Subcrag"));
        boulder.setDescription(rs.getString("Description"));
        boulder.setUrl(rs.getString("URL"));
        // ID, ADDRESS, HOME_NUMBER
        return null;
    }
}
