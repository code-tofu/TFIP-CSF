package day37.workshop37.repository;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import day37.workshop37.model.ArticleText;

@Repository
public class ArticleRepository {

    @Autowired
    private MongoTemplate mongoTemp;

    public String saveArticle(String title, String content, String img_id) {
        Document newArt = new Document();
        newArt.append("title", title);
        newArt.append("content", content);
        newArt.append("image_id", img_id);

        Document returnDoc = mongoTemp.insert(newArt, "articles");
        return returnDoc.getObjectId("_id").toString();
    }

    public ArticleText getArticle(String articleId) {
        Document returnDoc = mongoTemp.findById(articleId, Document.class, "articles");
        return new ArticleText(returnDoc.getString("title"), returnDoc.getString("content"),
                returnDoc.getString("image_id"));
    }

}
