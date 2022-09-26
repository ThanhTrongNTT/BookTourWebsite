package nhom04.hcmute.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import nhom04.hcmute.repository.UserRepository;
import nhom04.hcmute.service.UserService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:09
 * Filename : UserServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        log.info("Saving User");
        return userRepository.save(user);
    }

    @Override
    public User updateUser(String id, User user) {
        return null;
    }

    @Override
    public Role saveRole(Role role) {
        return null;
    }

    @Override
    public void addRoleToUser(String email, Role role) {

    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public Boolean existedByEmail(String Email) {
        return null;
    }

    @Override
    public void deleteUser(String email) {

    }

    @Override
    public Boolean checkPassword(String username, String password) {
        return null;
    }

    @Override
    public Boolean changePassword(String password, String username) {
        return null;
    }

    @Override
    public Boolean forgotPassword(String username, String email) {
        return null;
    }

    @Override
    public List<Role> getAllRoles() {
        return null;
    }
}
