package nhom04.hcmute.service;

import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:08
 * Filename : UserService
 */
public interface UserService {
    User saveUser(User user);

    User updateUser(String email, User user);

    Role saveRole(Role role);

    void addRoleToUser(String email, Role role);

    User getUserByEmail(String email);

    List<User> getAllUsers();

    Boolean existedByEmail(String email);
    void deleteUser(String email);
    Boolean checkPassword(String email, String password);
    Boolean changePassword(String password, String email);
    Boolean forgotPassword(String email);

    List<Role> getAllRoles();
}
