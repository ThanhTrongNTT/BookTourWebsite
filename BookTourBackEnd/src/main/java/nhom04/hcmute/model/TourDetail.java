package nhom04.hcmute.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:37
 * Filename : TourDetail
 */
@Data
public class TourDetail {
    private String tourName;
    private String tourDes;
    private Double price;
    private List<String> images;
    private Date startDay;
    private Date endDay;
    private Location beginningLocation;
    private Location destinationLocation;
}
