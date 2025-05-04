package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.FuncionarioDTO;
import com.unigoais.intralist.services.FuncionarioService;
import com.unigoais.intralist.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/funcionarios")
@CrossOrigin(origins = "http://localhost:63342")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<FuncionarioDTO> findById(@PathVariable Long id){
        FuncionarioDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    // No FuncionarioController.java
    @GetMapping("/search")
    public ResponseEntity<Page<FuncionarioDTO>> search(
            @RequestParam String nome,
            Pageable pageable) {
        Page<FuncionarioDTO> result = service.search(nome, pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping()
    public ResponseEntity <Page<FuncionarioDTO>> findAll(Pageable pageable){
        Page<FuncionarioDTO> dto = service.findAll(pageable);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity <FuncionarioDTO> insert (@RequestBody FuncionarioDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<FuncionarioDTO> update(@PathVariable Long id, @RequestBody FuncionarioDTO dto){
        try {
            dto = service.update(id, dto);
            return ResponseEntity.ok(dto);
        }
        catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
