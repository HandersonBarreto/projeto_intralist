package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.services.ProjetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping
    public Page<ProjetoDTO> findAll(Pageable pageable) {
        Page<ProjetoDTO> dto = service.findAll(pageable);
        return dto;
    }
}
