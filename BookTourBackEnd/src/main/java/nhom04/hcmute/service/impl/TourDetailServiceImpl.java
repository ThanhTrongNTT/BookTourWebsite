package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.repository.TourDetailRepository;
import nhom04.hcmute.service.TourDetailService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:25
 * Filename : TourDetailServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class TourDetailServiceImpl implements TourDetailService {
    private final TourDetailRepository tourDetailRepository;
    @Override
    public List<TourDetail> getAllTourDetail() {
        log.info("Get All Tour Detail");
        return tourDetailRepository.findAll();
    }

    @Override
    public TourDetail getTourDetailById(String id) {
        log.info("Get Tour Detail with id {}",id);
        return tourDetailRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("TourDetail with id %s not found",id)));
    }

    @Override
    public TourDetail saveTourDetail(TourDetail tourDetail) {
        log.info("Saving Tour Detail");
        return tourDetailRepository.save(tourDetail);
    }

    @Override
    public TourDetail updateTourDetail(String id, TourDetail tourDetail) {
        TourDetail updateTourDetail = tourDetailRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("TourDetail with id %s not found",id)));
        log.info("Updating Tour Detail");
        updateTourDetail.setTourName(tourDetail.getTourName());
        updateTourDetail.setTourDes(tourDetail.getTourDes());
        updateTourDetail.setImages(tourDetail.getImages());
        updateTourDetail.setPrice(tourDetail.getPrice());
        updateTourDetail.setStartDay(tourDetail.getStartDay());
        updateTourDetail.setEndDay(tourDetail.getEndDay());
        updateTourDetail.setBeginningLocation(tourDetail.getBeginningLocation());
        updateTourDetail.setDestinationLocation(tourDetail.getDestinationLocation());
        return tourDetailRepository.save(updateTourDetail);
    }

    @Override
    public void deleteTourDetail(String id) {
        TourDetail deleteTourDetail = tourDetailRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("TourDetail with id %s not found",id)));
        log.info("Deleting Tour Detail");
        tourDetailRepository.delete(deleteTourDetail);
    }
}
