package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.EquipeDTO;
import com.unigoais.intralist.services.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/equipes")
@CrossOrigin(origins = "http://localhost:63342")
public class EquipeController {

    @Autowired
    private EquipeService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<EquipeDTO> findById(@PathVariable Long id){
        EquipeDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping()
    public ResponseEntity <Page<EquipeDTO>> findAll(Pageable pageable){
        Page<EquipeDTO> dto = service.findAll(pageable);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity <EquipeDTO> insert (@RequestBody EquipeDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }
}
