package com.bagverse.bagverse_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "order_item")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long orderId;

    private Long productId;

    private int quantity;

    private double price;

}
