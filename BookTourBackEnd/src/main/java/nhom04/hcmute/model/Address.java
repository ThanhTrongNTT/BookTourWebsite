package nhom04.hcmute.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sat, 9/3/2022
 * Time     : 11:30
 * Filename : Address
 */
@Data
@Document(collection = "address")
public class Address {
    @Id
    private String id;
    private String street;
    private String district;
    private String city;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
