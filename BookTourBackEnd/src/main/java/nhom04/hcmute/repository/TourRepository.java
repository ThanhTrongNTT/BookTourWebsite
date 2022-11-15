package nhom04.hcmute.repository;

import nhom04.hcmute.model.Location;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.util.TourType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:57
 * Filename : TourRepository
 */
@Repository
public interface TourRepository extends MongoRepository<Tour,String> {
    List<Tour> getTourByType(TourType type);

    @Query(value = "{'tourDetail.tourName': {/$regex: ?0,$options:'i'}," +
            "'tourDetail.price': {/$regex: ?0,$options:'i'}," +
            "'tourDetail.startDay': {/$regex: ?0,$options:'i'}" +
            ",'tourDetail.endDay': {/$regex: ?0,$options:'i'}," +
            "'tourDetail.beginningLocation': {/$regex: ?0,$options:'i'}," +
            "'tourDetail.destinationLocation': {/$regex: ?0,$options:'i'}}")
    Page<Tour> searchTourPaging(String search, Pageable page);

    @Query(value = "{'tourDetail.destinationLocation' : ?0}")
    Page<Tour> findByLocation(Location location, Pageable pageable);
}
