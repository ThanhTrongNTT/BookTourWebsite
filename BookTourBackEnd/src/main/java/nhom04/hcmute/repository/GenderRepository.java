package nhom04.hcmute.repository;

import nhom04.hcmute.model.Gender;
import nhom04.hcmute.util.GenderType;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:57
 * Filename : GenderRepository
 */
@Repository
public interface GenderRepository extends MongoRepository<Gender,String> {

    @Query(value = "{'GenderType' : ?0}")
    Gender findByName(GenderType genderType);
}
