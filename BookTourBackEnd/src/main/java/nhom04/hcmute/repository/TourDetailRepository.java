package nhom04.hcmute.repository;

import nhom04.hcmute.model.TourDetail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:57
 * Filename : TourDetailRepository
 */
@Repository
public interface TourDetailRepository extends MongoRepository<TourDetail,String> {
}