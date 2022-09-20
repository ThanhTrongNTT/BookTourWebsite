package nhom04.hcmute.model;

import lombok.*;
import nhom04.hcmute.util.GenderType;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:07
 * Filename : Gender
 */
@Data
@Document(collection = "gender")
public class Gender {
    @Id
    private String id;
    private GenderType genderType;
    private Date createdAt;
    private Date modifiedAt;
}
