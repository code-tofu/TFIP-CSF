package day37.workshop37.repository;

public class SQLQueries {

    public static final String SQL_SAVE_IMG = """
               INSERT INTO images(img) VALUES (?)
            """;

    public static final String SQL_GET_IMG_BY_ID = """
                SELECT img FROM images WHERE img_id = ?
            """;

}
