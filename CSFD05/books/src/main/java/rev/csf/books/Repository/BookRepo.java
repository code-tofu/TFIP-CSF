package rev.csf.books.Repository;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class BookRepo {

    @Autowired
    MongoTemplate mongoTemplate;

    public List<String> getBookTitles(String queryString, int limit) {
        String regString = "." + queryString + ".";
        Query titleQuery = Query.query(Criteria.where("title").regex(regString, "i")).limit(limit);
        List<Document> queryResult = mongoTemplate.find(titleQuery, Document.class, "books");

        // CAN USE PROJECTION INSTEAD AND USE STREAM TO COLLATE
        List<String> queryTitles = new ArrayList<>();
        for (Document books : queryResult) {
            queryTitles.add(books.getString("title"));
        }

        System.out.println(queryTitles);
        return queryTitles;
    }

}
