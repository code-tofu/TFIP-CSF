package day37.workshop37.model;

public class ArticleText {

    private String title;
    private String content;
    private String img;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ArticleText() {
    }

    public ArticleText(String title, String content, String img) {
        this.title = title;
        this.content = content;
        this.img = img;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

}
