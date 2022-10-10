package nhom04.hcmute.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.Instant;
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
@RequiredArgsConstructor
@Document("user")
public class User {
    @Id
    private String id;
    private String email;
    @JsonIgnore
    private String password;
    private String fullName;
    private Address address;
    private Gender gender;
    private Set<Role> roles;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
