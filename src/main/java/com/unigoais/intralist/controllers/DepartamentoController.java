package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.DepartamentoDTO;
import com.unigoais.intralist.services.DepartamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/departamentos")
@CrossOrigin(origins = "http://localhost:63342")
public class DepartamentoController {

    @Autowired
    private DepartamentoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<DepartamentoDTO> findById(@PathVariable Long id){
        DepartamentoDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping()
    public ResponseEntity <Page<DepartamentoDTO>> findAll(Pageable pageable){
        Page<DepartamentoDTO> dto = service.findAll(pageable);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<DepartamentoDTO>> search(@RequestParam String nome, Pageable pageable) {
        Page<DepartamentoDTO> dto = service.search(nome, pageable);
        return ResponseEntity.ok(dto);
    }

}