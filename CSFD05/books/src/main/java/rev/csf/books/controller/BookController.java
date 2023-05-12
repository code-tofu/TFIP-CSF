package rev.csf.books.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import rev.csf.books.Repository.BookRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    BookRepo bookRepo;
    private static final String defaultLimit = "10";

    @GetMapping("api/books/search")
    public ResponseEntity<String> getBookTitles(@RequestParam String sq,
            @RequestParam(defaultValue = defaultLimit) String lim) {

        List<String> titles;
        try {
            titles = bookRepo.getBookTitles(sq, Integer.parseInt(lim));
        } catch (NumberFormatException NFerr) {
            System.out.println("Param Error, Using Default");
            titles = bookRepo.getBookTitles(sq, Integer.parseInt(defaultLimit));
        }

        JsonArrayBuilder titlesArray = Json.createArrayBuilder();
        for (String title : titles) {
            titlesArray.add(title);
        }

        JsonObject respBody = Json.createObjectBuilder().add("titles", titlesArray).build();

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(respBody.toString());
    }

}
