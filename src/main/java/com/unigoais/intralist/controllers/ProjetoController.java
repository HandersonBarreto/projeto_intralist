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

@RestController
@RequestMapping(value = "/projetos")
@CrossOrigin(origins = "http://localhost:63342")
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

    @PutMapping(value = "/{id}")
    public ResponseEntity<ProjetoDTO> update(@PathVariable Long id, @RequestBody ProjetoDTO dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
