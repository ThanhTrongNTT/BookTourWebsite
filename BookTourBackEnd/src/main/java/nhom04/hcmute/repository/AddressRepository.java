package nhom04.hcmute.repository;

import nhom04.hcmute.model.Address;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:56
 * Filename : AddressRepository
 */
@Repository
public interface AddressRepository extends MongoRepository<Address,String> {
}
