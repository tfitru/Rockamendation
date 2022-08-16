package com.example.CrackAToa.Models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Boulder_routes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String route;
    private String grading;
    private BigDecimal areaLatitude;
    private BigDecimal areaLongitude;
    private String state;
    private String gorge;
    private String area;
    private String crag;
    @Column(name="Subcrag")
    private String subCrag;
    private String description;
    private String url;

    public Boulder_routes(){}

    public Boulder_routes(String route, String grading, BigDecimal areaLatitude, BigDecimal areaLongitude, String state, String gorge, String area, String crag, String subCrag, String description, String url) {
        this.route = route;
        this.grading = grading;
        this.areaLatitude = areaLatitude;
        this.areaLongitude = areaLongitude;
        this.state = state;
        this.gorge = gorge;
        this.area = area;
        this.crag = crag;
        this.subCrag = subCrag;
        this.description = description;
        this.url = url;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public String getGrading() {
        return grading;
    }

    public void setGrading(String grading) {
        this.grading = grading;
    }

    public BigDecimal getAreaLatitude() {
        return areaLatitude;
    }

    public void setAreaLatitude(BigDecimal areaLatitude) {
        this.areaLatitude = areaLatitude;
    }

    public BigDecimal getAreaLongitude() {
        return areaLongitude;
    }

    public void setAreaLongitude(BigDecimal areaLongitude) {
        this.areaLongitude = areaLongitude;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getGorge() {
        return gorge;
    }

    public void setGorge(String gorge) {
        this.gorge = gorge;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCrag() {
        return crag;
    }

    public void setCrag(String crag) {
        this.crag = crag;
    }

    public String getSubCrag() {
        return subCrag;
    }

    public void setSubCrag(String subCrag) {
        this.subCrag = subCrag;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
