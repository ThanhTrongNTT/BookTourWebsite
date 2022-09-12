package nhom04.hcmute.model;

import lombok.*;
import nhom04.hcmute.util.GenderType;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:07
 * Filename : Gender
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Gender {
    private String id;
    private GenderType genderType;
    private Date createdAt;
    private Date modifiedAt;
}
