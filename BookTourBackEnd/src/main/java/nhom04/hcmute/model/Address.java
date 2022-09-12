package nhom04.hcmute.model;

import lombok.*;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sat, 9/3/2022
 * Time     : 11:30
 * Filename : Address
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String id;
    private String street;
    private String district;
    private String city;
    private Date createdAt;
    private Date modifiedAt;
}
