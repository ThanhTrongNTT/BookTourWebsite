package nhom04.hcmute.model;

import lombok.Data;
import nhom04.hcmute.util.LocationType;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 19:06
 * Filename : Location
 */
@Data
public class Location {
    private String id;
    private String locationName;
    private LocationType locationType;
    private Date createdAt;
    private Date modifiedAt;
}
