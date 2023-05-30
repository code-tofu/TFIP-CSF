package com.emergency.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.emergency.repo.AuthRepository;
import com.emergency.utils.Utils;

import jakarta.json.JsonObject;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    AuthRepository authRepo;

    @PostMapping(path="api/auth", consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<Void> authUser(@RequestBody String credentials){
        System.out.println(credentials);
        JsonObject credJson = Utils.getJSONObj(credentials);
        if(authRepo.authUserRedis(credJson))
        return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
    
}
