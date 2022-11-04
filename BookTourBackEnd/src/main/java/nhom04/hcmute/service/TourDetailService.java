package nhom04.hcmute.service;

import nhom04.hcmute.model.TourDetail;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:24
 * Filename : TourDetailService
 */
public interface TourDetailService {
    List<TourDetail> getAllTourDetail();
    TourDetail getTourDetailById(String id);
    TourDetail saveTourDetail(TourDetail tourDetail);
    TourDetail updateTourDetail(String id, TourDetail tourDetail);
    void deleteTourDetail(String id);
}