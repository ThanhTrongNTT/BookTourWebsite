package nhom04.hcmute.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.model.User;
import nhom04.hcmute.repository.UserRepository;
import nhom04.hcmute.service.UserService;
import org.springframework.stereotype.Service;

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
}
