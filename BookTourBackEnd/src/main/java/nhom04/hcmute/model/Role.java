package nhom04.hcmute.model;

import lombok.*;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 9/9/2022
 * Time     : 11:54
 * Filename : Role
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    private String id;
    private String roleName;
    private Date createdAt;
    private Date modifiedAt;
}
