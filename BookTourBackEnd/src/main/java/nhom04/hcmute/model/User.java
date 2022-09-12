package nhom04.hcmute.model;

import lombok.*;

import java.util.Date;
import java.util.Set;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sat, 9/3/2022
 * Time     : 11:29
 * Filename : User
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String id;
    private String email;
    private String fullName;
    private Address address;
    private Gender gender;
    private Set<Role> roles;
    private Date createdAt;
    private Date modifiedAt;
}
