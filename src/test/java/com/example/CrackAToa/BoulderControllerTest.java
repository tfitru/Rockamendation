package com.example.CrackAToa;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.jsf.el.WebApplicationContextFacesELResolver;

import com.example.CrackAToa.Controller.BoulderController;
import com.example.CrackAToa.Models.Boulder_routes;
import com.example.CrackAToa.Repository.BoulderRepo;
import com.example.CrackAToa.Service.BoulderService;
import com.fasterxml.jackson.databind.ObjectMapper;



@WebMvcTest(BoulderController.class)
public class BoulderControllerTest {

    @MockBean
    private BoulderService boulderService;

    @Autowired
    private org.springframework.web.context.WebApplicationContext WebApplicationContext;

    @Autowired
    private MockMvc mvc;




    






    @Test
    public void getAllRoutes() throws Exception {
        
    }

    

   

    

 

    @Test
    public void repoTest() {

    }




}
