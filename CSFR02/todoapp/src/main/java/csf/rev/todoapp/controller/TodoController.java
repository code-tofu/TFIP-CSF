package csf.rev.todoapp.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class TodoController {

    @PostMapping(path="/api/todo/post", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> todoPostJson(@RequestBody String todo){
        System.out.println(todo);
        return ResponseEntity.ok().body("{status: 'json upload success'}");
    }

    @PostMapping(path="/api/todo/post", consumes = "application/x-www-form-urlencoded", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> todoPostXUrl(@RequestBody String todo){
        System.out.println(todo);
        return ResponseEntity.ok("{status: urlencoded upload success}");
    }


    
}
