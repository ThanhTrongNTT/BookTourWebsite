package nhom04.hcmute.repository;

import nhom04.hcmute.model.User;
import nhom04.hcmute.service.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 13:57
 * Filename : UserRepositoryTest
 */
@RunWith(MockitoJUnitRunner.class)
class UserRepositoryTest {
    private MockMvc mockMvc;
    @Mock
    UserRepository userRepository;
    @InjectMocks
    private UserService userService;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(userService).build();
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

    @Test
    void findUser() throws Exception{
        User user =userService.getUserByEmail("tronglagi111@gmail.com");
        System.out.println(user);
        userRepository.save(user);
    }

    @Test
    public void getAllUsers() throws Exception{
        List<User> users = userService.getAllUsers();
        System.out.println(users);
    }
}