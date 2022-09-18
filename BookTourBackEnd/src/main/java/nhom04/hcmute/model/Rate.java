package nhom04.hcmute.model;

import lombok.Data;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:40
 * Filename : Rate
 */
@Data
public class Rate {
    private String id;
    private User user;
    private Integer rateStar;
    private String comment;
    private Date createdAt;
    private Date modifiedAt;
}
