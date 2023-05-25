package day37.workshop37.repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import static day37.workshop37.repository.SQLQueries.*;

@Repository
public class ImageRepository {

    @Autowired
    private JdbcTemplate jdbcTemp;

    public int saveImg(byte[] img) throws DataAccessException {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemp.update(conn -> {
            PreparedStatement statement = conn.prepareStatement(SQL_SAVE_IMG, Statement.RETURN_GENERATED_KEYS);
            statement.setBytes(1, img);
            return statement;
        }, keyHolder);
        System.out.println(keyHolder.getKey().intValue());
        return keyHolder.getKey().intValue();
    }

    public Optional<byte[]> getImgById(int imgId) {
        Optional<byte[]> opt = jdbcTemp.query(SQL_GET_IMG_BY_ID, rs -> {
            if (!rs.next())
                return Optional.empty();
            return Optional.of(rs.getBytes("img"));
        }, imgId);
        return opt;
    }

}
