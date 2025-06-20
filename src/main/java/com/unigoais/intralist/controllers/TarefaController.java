package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.TarefaDTO;
import com.unigoais.intralist.services.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@RestController
@RequestMapping("/tarefas")
@CrossOrigin(origins = "http://localhost:63342")
public class TarefaController {

    @Autowired
    private TarefaService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<TarefaDTO> findById(@PathVariable Long id) {
        TarefaDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<Page<TarefaDTO>> findAll(Pageable pageable) {
        Page<TarefaDTO> dto = service.findAll(pageable);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<TarefaDTO> insert(@RequestBody TarefaDTO dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<TarefaDTO> update(@PathVariable Long id, @RequestBody TarefaDTO dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
