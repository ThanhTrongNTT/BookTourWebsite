package nhom04.hcmute.service;

import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.util.TourType;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:23
 * Filename : TourService
 */
public interface TourService {
    List<Tour> getAllTours();
    List<Tour> saveAll(List<Tour> tourList);
    List<Tour> getTourByType(String typeName);
    Tour getTourById(String id);
    Tour saveTour(Tour tour);
    Tour updateTour(String id, Tour tour);
    void deleteTour(String id);

    Tour getTourByTourDetail(TourDetail tourDetail);

}
