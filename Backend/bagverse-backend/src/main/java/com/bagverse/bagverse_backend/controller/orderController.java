package com.bagverse.bagverse_backend.controller;

import com.bagverse.bagverse_backend.entity.Order;
import com.bagverse.bagverse_backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")

public class orderController {

    @Autowired
    private OrderService orderService;

    // Place Order
    @PostMapping
    public Order placeOrder(@RequestBody Order order){
        return orderService.placeOrder(order);
    }

    // Get orders for a specific user
    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable Long userId){
        return orderService.getOrderByUserId(userId);
    }

    // Get all orders (admin)
    @GetMapping
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    // Delete order
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
    }

}
