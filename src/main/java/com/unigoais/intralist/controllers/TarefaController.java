package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.TarefaDTO;
import com.unigoais.intralist.services.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/tarefas")
public class TarefaController {

    @Autowired
    private TarefaService service;

    @GetMapping(value = "/{id}")
    public TarefaDTO findById(@PathVariable Long id) {
        TarefaDTO dto = service.findById(id);
        return dto;
    }

    @GetMapping
    public Page<TarefaDTO> findAll(Pageable pageable) {
        Page<TarefaDTO> dto = service.findAll(pageable);
        return dto;
    }

}
