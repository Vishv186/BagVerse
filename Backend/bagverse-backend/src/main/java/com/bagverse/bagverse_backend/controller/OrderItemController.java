package com.bagverse.bagverse_backend.controller;

import com.bagverse.bagverse_backend.entity.OrderItem;
import com.bagverse.bagverse_backend.service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order_item")

public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    // Add item to order
    @PostMapping
    public OrderItem addOrderItem(@RequestBody OrderItem orderItem){
        return orderItemService.addOrderItem(orderItem);
    }

    // Get items of an order
    @GetMapping("/order/{orderId}")
    public List<OrderItem> getItemsByOrderId(@PathVariable Long orderId){
        return orderItemService.getItemsByOrderId(orderId);
    }
}
