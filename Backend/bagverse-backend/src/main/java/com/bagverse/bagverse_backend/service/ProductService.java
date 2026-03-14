package com.bagverse.bagverse_backend.service;

import com.bagverse.bagverse_backend.entity.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product createProduct(Product product);
    Product updateProduct(Long id, Product product);
    void deleteProduct(Long id);

    Page<Product> getProductsWithPagination(int page, int size);
}
