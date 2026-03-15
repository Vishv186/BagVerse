package com.bagverse.bagverse_backend.repository;

import com.bagverse.bagverse_backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findUByUserId(Long userId);
}
