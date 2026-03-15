package com.bagverse.bagverse_backend.service;

import com.bagverse.bagverse_backend.entity.Order;

import java.util.List;

public interface OrderService {

    Order placeOrder(Order order);

    List<Order> getOrderByUserId(Long userId);

    List<Order> getAllOrders();

    void deleteOrder(Long id);
}
