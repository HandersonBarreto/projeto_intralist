package com.unigoais.intralist.repositories;

import com.unigoais.intralist.entities.Departamento;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartamentoRepository extends JpaRepository<Departamento, Long> {


    Page<Departamento> findByNomeContainingIgnoreCase(String nome, Pageable pageable);
}
