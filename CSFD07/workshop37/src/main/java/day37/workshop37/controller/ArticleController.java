package day37.workshop37.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import day37.workshop37.service.ArticleService;

@Controller
public class ArticleController {

    @Autowired
    private ArticleService artSvc;

    @GetMapping("/")
    public String landingUploadPage() {
        return "landing";
    }

    // multipart names need to mage the name in the form
    @PostMapping(path = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadedPage(@RequestPart String title, @RequestPart String content,
            @RequestPart MultipartFile imgFile, Model model) {

        String id = artSvc.uploadArticle(title, content, imgFile);
        System.out.println(id);

        model.addAttribute("title", title);
        model.addAttribute("content", content);
        model.addAttribute("filename", imgFile.getOriginalFilename());
        model.addAttribute("size", imgFile.getSize());
        model.addAttribute("contentType", imgFile.getContentType());
        model.addAttribute("id", id);

        return "uploaded";
    }

    @GetMapping("/article/{id}")
    public String getArticlePage(@PathVariable String id, Model model) {
        model.addAttribute("id", id);
        model.addAttribute("textcontent", artSvc.downloadArticleText(id));
        return "showimage";
    }

    @GetMapping("/image/show/{id}")
    @ResponseBody
    public ResponseEntity<byte[]> getPhoto(@PathVariable String id) {
        byte[] img = artSvc.downloadArticleImage(id);
        System.out.println(img.length);
        return ResponseEntity.status(200)
                .header("Content-Type", "image/jpg")
                .body(img);
    }

}
