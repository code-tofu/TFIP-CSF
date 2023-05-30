package com.emergency.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import jakarta.json.JsonObject;

@Repository
public class AuthRepository {

    @Autowired
    RedisTemplate<String,String> rTemplate;
    public boolean authUserRedis(JsonObject credJson){
        if(rTemplate.opsForValue().get(credJson.getString("username")).equals(credJson.getString("password"))){
        System.out.println("User Authenticated");
        return true;
        } else {
        System.out.println("User Invalid");
        return false;
        }
    }
}
