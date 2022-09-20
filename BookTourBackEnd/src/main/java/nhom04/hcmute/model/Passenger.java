package nhom04.hcmute.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 19:02
 * Filename : Passenger
 */
@Data
@Document(collection = "passenger")
public class Passenger {
    @Id
    private String id;
    private String fullName;
    private Gender gender;
    private Date birthDay;
    private Date createdAt;
    private Date modifiedAt;
}
