package nhom04.hcmute.model;

import lombok.Data;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:37
 * Filename : Tour
 */
@Data
public class Tour {
    private String id;
    private Passenger passenger;
    private TourDetail tourDetail;
    private Date createdAt;
    private Date modifiedAt;
}
