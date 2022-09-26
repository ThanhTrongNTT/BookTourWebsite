package nhom04.hcmute.repository;

import nhom04.hcmute.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:08
 * Filename : UserRepository
 */
@Repository
public interface UserRepository extends MongoRepository<User,String> {
    @Query(value = "{'email' : ?0}")
    User findByEmail(String email);
}
