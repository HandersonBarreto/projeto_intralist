package com.unigoais.intralist.repositories;

import com.unigoais.intralist.entities.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProjetoRepository extends JpaRepository<Projeto, Long> {

    Page<Projeto> findByNomeContainingIgnoreCase(String nome, Pageable pageable);

    @Query("SELECT p FROM Projeto p WHERE LOWER(p.nome) LIKE LOWER(CONCAT('%',:nome,'%'))")
    Page<Projeto> searchByName(@Param("nome") String nome, Pageable pageable);
}
