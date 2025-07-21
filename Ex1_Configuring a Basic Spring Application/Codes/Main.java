package com.library;

import com.library.repository.BookRepository;
import com.library.service.BookService;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        System.out.println("[Application] Starting Spring context...");

        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            System.out.println("[Application] Retrieving BookService bean from context...");
            BookService bookService = context.getBean(BookService.class);
            bookService.displayBooks();

            System.out.println("[Application] Retrieving BookRepository bean from context...");
            BookRepository bookRepository = context.getBean(BookRepository.class);
            bookRepository.fetchBooks();

            System.out.println("[Application] End of application.");
        } 
    }
}

