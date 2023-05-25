package day37.workshop37.model;

//DEPRECATED
public class ArticleFull {

    private ArticleText articleText;
    private byte[] articleImg;

    public ArticleText getArticleText() {
        return articleText;
    }

    public void setArticleText(ArticleText articleText) {
        this.articleText = articleText;
    }

    public byte[] getArticleImg() {
        return articleImg;
    }

    public void setArticleImg(byte[] articleImg) {
        this.articleImg = articleImg;
    }

    public ArticleFull() {
    }

    public ArticleFull(ArticleText articleText, byte[] articleImg) {
        this.articleText = articleText;
        this.articleImg = articleImg;
    }

}
