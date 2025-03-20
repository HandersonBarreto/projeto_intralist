package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.TarefaDTO;
import com.unigoais.intralist.services.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/tarefas")
public class TaregaController {

    @Autowired
    private TarefaService service;

    @GetMapping(value = "/{id}")
    public TarefaDTO findById(@PathVariable Long id) {
        TarefaDTO dto = service.findById(id);
        return dto;
    }

}
