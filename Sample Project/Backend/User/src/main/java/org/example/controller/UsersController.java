package org.example.controller;

import org.example.model.Users;
import org.example.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping
    public List<Users> getUsers(){
        return usersRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Users> getUsersById(@PathVariable int id){
        return usersRepository.findById(id);
    }
    @PostMapping
    public Users createUser(@RequestBody Users user){
        return usersRepository.save(user);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id){
        usersRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable int id,@RequestBody Users user){
        Optional<Users> existingUser = usersRepository.findById(id);
        if (existingUser.isPresent()) {
            Users updatedUser = existingUser.get();
            updatedUser.setName(user.getName());
            updatedUser.setEmail(user.getEmail());
            return usersRepository.save(updatedUser);
        } else {
            user.setId(id);
            return usersRepository.save(user);
        }
    }
}