package com.bagverse.bagverse_backend.controller;

import com.bagverse.bagverse_backend.entity.Cart;
import com.bagverse.bagverse_backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")

public class CartController {
    @Autowired
    private CartService cartService;

    // Add product to cart
    @PostMapping("/add")
    public Cart addToCart(@RequestBody Cart cart){
        return cartService.addToCart(cart);
    }

    // Get cart items for a user
    @GetMapping("/user/{userId}")
    public List<Cart> getCartByUserId(@PathVariable Long userId){
        return cartService.getCartByUserId(userId);
    }

    // Remove item from cart
    @DeleteMapping("/{id}")
    public void removeFromCart(@PathVariable Long id){
        cartService.removeFromCart(id);
    }
}
