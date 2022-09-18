package nhom04.hcmute.model;

import lombok.Data;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:36
 * Filename : Booking
 */
@Data
public class Booking {
    private String id;
    private User user;
    private boolean enable;
    private Tour tour;
    private Date createdAt;
    private Date modifiedAt;
}
