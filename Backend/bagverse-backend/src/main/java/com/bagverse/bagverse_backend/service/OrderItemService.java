package com.bagverse.bagverse_backend.service;

import com.bagverse.bagverse_backend.entity.OrderItem;

import java.util.List;

public interface OrderItemService {

    OrderItem addOrderItem(OrderItem orderItem);

    List<OrderItem> getItemsByOrderId(Long orderId);

}
