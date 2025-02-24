package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.FuncionarioDTO;
import com.unigoais.intralist.services.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping(value = "/{id}")
    public FuncionarioDTO findById(@PathVariable Long id){
        return service.findById(id);
    }

    @GetMapping()
    public Page<FuncionarioDTO> findAll(Pageable pageable){
        return service.findAll(pageable);
    }

    @PostMapping
    public FuncionarioDTO insert (@RequestBody FuncionarioDTO dto){
        return service.insert(dto);
    }

}
