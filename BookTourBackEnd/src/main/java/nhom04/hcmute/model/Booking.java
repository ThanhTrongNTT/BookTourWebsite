package nhom04.hcmute.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:36
 * Filename : Booking
 */
@Data
@Document(collection = "booking")
public class Booking {
    @Id
    private String id;
    private User user;
    private boolean enable;
    private Tour tour;
    private Date createdAt;
    private Date modifiedAt;
}