package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.repositories.ProjetoRepository;
import com.unigoais.intralist.services.ProjetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/projetos")
public class ProjetoController {

    @Autowired
    private ProjetoService service;

    @GetMapping(value = "/{id}")
    public ProjetoDTO findById(@PathVariable Long id) {
        ProjetoDTO dto = service.findById(id);
        return dto;


    }
}
