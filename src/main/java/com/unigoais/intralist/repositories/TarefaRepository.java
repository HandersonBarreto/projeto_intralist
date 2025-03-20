package com.unigoais.intralist.repositories;

import com.unigoais.intralist.entities.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
