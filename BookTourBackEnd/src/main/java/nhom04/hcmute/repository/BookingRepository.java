package nhom04.hcmute.repository;

import nhom04.hcmute.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:56
 * Filename : BookingRepository
 */
@Repository
public interface BookingRepository extends MongoRepository<Booking,String> {
    List<Booking> getBookingByUser(String email);
}
