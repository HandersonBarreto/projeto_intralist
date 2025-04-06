package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.repositories.ProjetoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProjetoService {

    @Autowired
    private ProjetoRepository repository;

    @Transactional(readOnly = true)
    public ProjetoDTO findById(Long id) {
        Optional<Projeto> result = repository.findById(id);
        Projeto projeto = result.get();
        ProjetoDTO dto = new ProjetoDTO(projeto);
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<ProjetoDTO> findAll(Pageable pageable) {
        Page<Projeto> listProjeto = repository.findAll(pageable);
        return listProjeto.map(x -> new ProjetoDTO(x));
    }

    @Transactional
    public ProjetoDTO insert(ProjetoDTO dto) {
        Projeto entity = new Projeto();
        copyDtoTOEntity(dto, entity);
        entity = repository.save(entity);
        return new ProjetoDTO(entity);
    }

    @Transactional
    public ProjetoDTO update(Long id, ProjetoDTO dto) {
        Projeto entity = repository.getReferenceById(id);
        copyDtoTOEntity(dto, entity);
        entity = repository.save(entity);
        return new ProjetoDTO(entity);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyDtoTOEntity(ProjetoDTO dto, Projeto entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setDataCriacao(dto.getDataCriacao());
        entity.setDataInicio(dto.getDataInicio());
        entity.setDataFimPrevisto(dto.getDataFimPrevisto());
        entity.setMeta(dto.getMeta());
        entity.setRisco(dto.getRisco());
        entity.setStatusProjeto(dto.getStatusProjeto());
    }
}
