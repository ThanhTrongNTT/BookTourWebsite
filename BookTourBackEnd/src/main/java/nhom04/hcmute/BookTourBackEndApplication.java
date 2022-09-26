package nhom04.hcmute;

import nhom04.hcmute.model.User;
import nhom04.hcmute.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class BookTourBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookTourBackEndApplication.class, args);
    }

//    @Bean
//    CommandLineRunner runner(UserRepository userRepository){
//        return args -> {
////            User user = new User();
////            user.setFullName("Trong123");
//            User user =userRepository.findByEmail("tronglagi111@gmail.com");
//            System.out.println(user);
//        };
//}
    }

