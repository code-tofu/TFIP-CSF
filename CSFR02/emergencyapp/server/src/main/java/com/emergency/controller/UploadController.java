package com.emergency.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.emergency.utils.Utils;


@Controller
@CrossOrigin(origins = "*")
public class UploadController {

    @PostMapping(path = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseBody
    public ResponseEntity<String> postUpload(@RequestPart String content, @RequestPart MultipartFile[] files) {

        // System.out.printf(content);
        System.out.println(Utils.getJSONObj(content).toString());
        System.out.println(Integer.toString(files.length));
        for (MultipartFile file : files) {
            System.out.printf(file.getOriginalFilename());
            System.out.println(":"+file.getSize());
        }

        return ResponseEntity.ok().build();
    }
}
