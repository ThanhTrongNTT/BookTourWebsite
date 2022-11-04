package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.repository.TourRepository;
import nhom04.hcmute.service.TourService;
import nhom04.hcmute.util.TourType;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:25
 * Filename : TourServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class TourServiceImpl implements TourService {
    private final TourRepository tourRepository;
    @Override
    public List<Tour> getAllTours() {
        log.info("Get All Tours");
        return tourRepository.findAll();
    }

    @Override
    public List<Tour> getTourByType(String typeName) {
        log.info("Get Tour with type {}",typeName);
        TourType tourType = TourType.findByName(typeName);
        return tourRepository.getTourByType(tourType);
    }

    @Override
    public Tour getTourById(String id) {
        log.info("Get Tour with id {}",id);
        return tourRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("Tour with id %s not found",id)));
    }

    @Override
    public Tour saveTour(Tour tour) {
        log.info("Saving Tour");
        return tourRepository.save(tour);
    }

    @Override
    public Tour updateTour(String id, Tour tour) {
        Tour updateTour = tourRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("Tour with id %s not found",id)));
        log.info("Updating Tour");
        updateTour.setTourDetail(tour.getTourDetail());
        updateTour.setPassenger(tour.getPassenger());
        updateTour.setType(tour.getType());
        Date date = new Date();
        updateTour.setModifiedAt(date);
        return tourRepository.save(updateTour);
    }

    @Override
    public void deleteTour(String id) {
        Tour deleteTour = tourRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("Tour with id %s not found",id)));
        log.info("Deleting Tour");
        tourRepository.delete(deleteTour);
    }

    @Override
    public Tour getTourByTourDetail(TourDetail tourDetail) {
        log.info("Get Tours by TourDetail");
        return tourRepository.getTourByTourDetail(tourDetail);
    }
}
