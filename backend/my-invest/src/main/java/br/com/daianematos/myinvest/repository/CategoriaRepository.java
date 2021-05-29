package br.com.daianematos.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.daianematos.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
}
