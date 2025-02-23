package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.FuncionarioDTO;
import com.unigoais.intralist.services.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping(value = "/{id}")
    public FuncionarioDTO findById(@PathVariable Long id){
        return service.findById(id);
    }

}
