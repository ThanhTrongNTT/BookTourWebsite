package nhom04.hcmute.security.principal;

import nhom04.hcmute.model.Address;
import nhom04.hcmute.model.Gender;
import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:27
 * Filename : UserPrinciple
 */
public class UserPrincipal implements UserDetails {
    private String id;
    private String email;
    private String password;
    private String fullName;
    private Address address;
    private Gender gender;
    private Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public UserPrincipal() {

    }

    public UserPrincipal(String id, String email, String password, String fullName, Address address, Gender gender) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.address = address;
        this.gender = gender;
//        this.authorities = authorities;
    }

    public static UserPrincipal create(User user){
//        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
//                new SimpleGrantedAuthority(role.getRoleName().name())
//        ).collect(Collectors.toList());
        UserPrincipal userPrincipal = new UserPrincipal(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getFullName(),
                user.getAddress(),
                user.getGender()
//                authorities
        );
        return userPrincipal;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}