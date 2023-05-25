package csf.rev.weatherng.Controller;

import java.io.InputStreamReader;
import java.io.StringReader;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.amqp.RabbitProperties.Template;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@RestController
public class WeatherController {

    public static final String OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

    @Value("${OPEN_WEATHER_API_KEY}")
    String apiKey;

    @GetMapping("/api/{city}")
    public ResponseEntity<String> weatherAPI(@PathVariable String city,
            @RequestParam(defaultValue = "standard") String units) {

        // this should be in a service but i'm lazy
        String reqURL = UriComponentsBuilder.fromUriString(OPEN_WEATHER_API_URL)
                .queryParam("q", city)
                .queryParam("units", units)
                .queryParam("appid", apiKey)
                .toUriString();
        RequestEntity req = RequestEntity.get(reqURL).build();
        System.out.println(">>>>Req:" + req.toString());

        RestTemplate template = new RestTemplate();
        ResponseEntity<String> resp = template.exchange(req, String.class);
        System.out.println(">>>>Resp:" + resp.toString());
        StringReader sr = new StringReader(resp.getBody().toString());
        JsonReader jsr = Json.createReader(sr);
        JsonObject respObj = (JsonObject) jsr.read();

        JsonObject respJson = Json.createObjectBuilder()
                .add("city", respObj.getString("name"))
                .add("weather_main", respObj.getJsonArray("weather").getJsonObject(0).getString("main"))
                .add("weather_desc", respObj.getJsonArray("weather").getJsonObject(0).getString("description"))
                .add("temp", respObj.getJsonObject("main").getJsonNumber("temp").doubleValue())
                .add("feels_like", respObj.getJsonObject("main").getJsonNumber("feels_like").doubleValue())
                .add("temp_min", respObj.getJsonObject("main").getJsonNumber("temp_min").doubleValue())
                .add("temp_max", respObj.getJsonObject("main").getJsonNumber("temp_max").doubleValue())
                .add("humidity", respObj.getJsonObject("main").getInt("humidity"))
                .build();
        return ResponseEntity.ok(respJson.toString());
    }

}
