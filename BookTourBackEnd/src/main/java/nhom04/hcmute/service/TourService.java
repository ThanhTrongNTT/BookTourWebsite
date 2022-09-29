package nhom04.hcmute.service;

import nhom04.hcmute.model.Tour;
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
    List<Tour> getTourByType(TourType type);
    Tour getTourById(String id);
    Tour saveTour(Tour tour);
    Tour updateTour(String id, Tour tour);
    void deleteTour(String id);
}
