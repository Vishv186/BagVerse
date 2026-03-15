package com.bagverse.bagverse_backend.service;

import com.bagverse.bagverse_backend.entity.Cart;
import java.util.List;

public interface CartService {

    Cart addToCart(Cart cart);

    List<Cart> getCartByUserId(Long userId);

    void removeFromCart(Long id);
}
