package nhom04.hcmute.repository;

import nhom04.hcmute.model.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 13:57
 * Filename : UserRepositoryTest
 */
class UserRepositoryTest {
    @Autowired
    UserRepository userRepository;
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void saveUser(){
        User user = new User();
        user.setFullName("Trong");
        userRepository.save(user);
    }
}