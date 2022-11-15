package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Location;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.repository.LocationRepository;
import nhom04.hcmute.repository.TourRepository;
import nhom04.hcmute.service.TourService;
import nhom04.hcmute.util.LocationType;
import nhom04.hcmute.util.TourType;
import nhom04.hcmute.util.page.SetPageResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    private final LocationRepository locationRepository;
    private final SetPageResponse<Tour> setPageResponse;

    @Override
    public List<Tour> getAllTours() {
        log.info("Get All Tours");
        return tourRepository.findAll();
    }

    @Override
    public List<Tour> saveAll(List<Tour> tourList) {
        log.info("Save All Tours");
        for (Tour item : tourList) {
            Location locationBegin = locationRepository.findLocationByLocationNameAndLocationType(
                    item.getTourDetail().getBeginningLocation().getLocationName()
                    , LocationType.BEGINNING);
            Location locationDes = locationRepository.findLocationByLocationNameAndLocationType(
                    item.getTourDetail().getDestinationLocation().getLocationName()
                    , LocationType.DESTINATION);
            item.getTourDetail().setBeginningLocation(locationBegin);
            item.getTourDetail().setDestinationLocation(locationDes);
        }
        return tourRepository.saveAll(tourList);
    }

    @Override
    public List<Tour> getTourByType(String typeName) {
        log.info("Get Tour with type {}", typeName);
        TourType tourType = TourType.findByName(typeName);
        return tourRepository.getTourByType(tourType);
    }

    @Override
    public Tour getTourById(String id) {
        log.info("Get Tour with id {}", id);
        return tourRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Tour with id %s not found", id)));
    }

    @Override
    public Tour saveTour(Tour tour) {
        log.info("Saving Tour");
        Location locationBegin = locationRepository.findLocationByLocationNameAndLocationType(
                tour.getTourDetail().getBeginningLocation().getLocationName()
                , LocationType.BEGINNING);
        Location locationDes = locationRepository.findLocationByLocationNameAndLocationType(
                tour.getTourDetail().getDestinationLocation().getLocationName()
                , LocationType.DESTINATION);
        tour.getTourDetail().setBeginningLocation(locationBegin);
        tour.getTourDetail().setDestinationLocation(locationDes);
        return tourRepository.save(tour);
    }

    @Override
    public Tour updateTour(String id, Tour tour) {
        Tour updateTour = tourRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Tour with id %s not found", id)));
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
                .orElseThrow(() -> new NotFoundException(String.format("Tour with id %s not found", id)));
        log.info("Deleting Tour");
        tourRepository.delete(deleteTour);
    }

    @Override
    public PageResponse searchTour(String search, Pageable pageable) {
        Page<Tour> tours = tourRepository.searchTourPaging(search, pageable);
        log.info("Searching Tours");
        return setPageResponse.pageResponse(tours);
    }

    @Override
    public PageResponse getTourPaging(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Page<Tour> tours = tourRepository.findAll(PageRequest.of(pageNo, pageSize, sort));
        log.info("Get All tours with pagination");
        return setPageResponse.pageResponse(tours);
    }

    @Override
    public PageResponse getTourLocation(String location, int pageNo, int pageSize, String sortBy, String sortDir) {
        Location destination = locationRepository.findLocationByLocationNameAndLocationType(location,LocationType.DESTINATION);
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Page<Tour> tours = tourRepository.findByLocation(destination,PageRequest.of(pageNo, pageSize, sort));
        return setPageResponse.pageResponse(tours);
    }
}
