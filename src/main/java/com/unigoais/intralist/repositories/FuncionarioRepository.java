package com.unigoais.intralist.repositories;

import com.unigoais.intralist.entities.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository <Funcionario, Long> {

}
