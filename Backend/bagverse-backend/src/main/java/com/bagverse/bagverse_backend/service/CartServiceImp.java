package com.bagverse.bagverse_backend.service;

import com.bagverse.bagverse_backend.entity.Cart;
import com.bagverse.bagverse_backend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImp implements CartService{

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart addToCart(Cart cart){
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    @Override
    public void removeFromCart(Long id) {
        cartRepository.deleteById(id);
    }

}
