package day37.workshop37.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import day37.workshop37.model.ArticleFull;
import day37.workshop37.model.ArticleText;
import day37.workshop37.repository.ArticleRepository;
import day37.workshop37.repository.ImageRepository;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository artRepo;
    @Autowired
    private ImageRepository imgRepo;

    public String uploadArticle(String title, String content, MultipartFile img) {
        try {
            int img_id = imgRepo.saveImg(img.getBytes());
            String _id = artRepo.saveArticle(title, content, Integer.toString(img_id));
            return _id;
        } catch (DataAccessException | IOException ex) {
            ex.printStackTrace();
            return "error";
        }
    }

    public ArticleText downloadArticleText(String id) {
        return artRepo.getArticle(id);
    }

    public byte[] downloadArticleImage(String id) {
        return (imgRepo.getImgById(Integer.parseInt(id))).get();
    }

}
