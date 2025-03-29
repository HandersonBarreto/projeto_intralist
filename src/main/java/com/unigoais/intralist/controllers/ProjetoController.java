package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.services.ProjetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/projetos")
public class ProjetoController {

    @Autowired
    private ProjetoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProjetoDTO> findById(@PathVariable Long id) {
        ProjetoDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<Page<ProjetoDTO>> findAll(Pageable pageable) {
        Page<ProjetoDTO> dto = service.findAll(pageable);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<ProjetoDTO> insert(@RequestBody ProjetoDTO dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }
}
