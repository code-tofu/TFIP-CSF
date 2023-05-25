SHOW DATABASES;
CREATE DATABASE article_imgs;
USE article_imgs;

CREATE TABLE images (
    img_id int auto_increment,
    img mediumblob,

    primary key(img_id)
);

SHOW TABLES;

SELECT img_id from images;