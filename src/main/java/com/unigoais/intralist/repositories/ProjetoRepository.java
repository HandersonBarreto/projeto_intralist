package com.unigoais.intralist.repositories;

import com.unigoais.intralist.dto.MonthlyStatusMetricDTO;
import com.unigoais.intralist.dto.ProjectStatusMetricDTO;
import com.unigoais.intralist.entities.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjetoRepository extends JpaRepository<Projeto, Long> {

    Page<Projeto> findByNomeContainingIgnoreCase(String nome, Pageable pageable);

    @Query("SELECT p FROM Projeto p WHERE LOWER(p.nome) LIKE LOWER(CONCAT('%',:nome,'%'))")
    Page<Projeto> searchByName(@Param("nome") String nome, Pageable pageable);

    @Query("SELECT new com.unigoais.intralist.dto.ProjectStatusMetricDTO(p.statusProjeto, COUNT(p)) FROM Projeto p GROUP BY p.statusProjeto")
    List<ProjectStatusMetricDTO> countProjectsByStatus();

    // NOVA QUERY: Contar projetos por status e por mês para um dado ano
    @Query("SELECT new com.unigoais.intralist.dto.MonthlyStatusMetricDTO(MONTH(p.dataCriacao), COUNT(p), CAST(p.statusProjeto AS string)) " +
            "FROM Projeto p " +
            "WHERE YEAR(p.dataCriacao) = :year " +
            "GROUP BY MONTH(p.dataCriacao), p.statusProjeto " +
            "ORDER BY MONTH(p.dataCriacao), p.statusProjeto")
    List<MonthlyStatusMetricDTO> countProjectsByStatusAndMonth(@Param("year") int year);

}
