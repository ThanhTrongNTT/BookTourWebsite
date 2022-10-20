package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.service.TourService;
import nhom04.hcmute.util.TourType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:17
 * Filename : TourController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class TourController {
    private final TourService tourService;

    @GetMapping("/tours")
    public ResponseEntity<List<Tour>> getAllTours() {
        return ResponseEntity.ok().body(tourService.getAllTours());
    }

    @GetMapping("/tour/{id}")
    public ResponseEntity<Tour> getTourById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(tourService.getTourById(id));
    }
    @PostMapping("/tour/save")
    public ResponseEntity<ApiResponse> saveTour(@RequestBody Tour tour){
        Tour saveTour = tourService.saveTour(tour);
        return ResponseEntity.ok().body(new ApiResponse(true,"Save success!"));
    }

    @PutMapping("/tour/{id}")
    public ResponseEntity<ApiResponse> updateTour(@PathVariable("id")String id,@RequestBody Tour tour){
        Tour updateTour = tourService.updateTour(id,tour);
        return ResponseEntity.ok().body(new ApiResponse(true, "Update Success"));
    }

    @DeleteMapping("/tour/delete/{id}")
    public ResponseEntity<ApiResponse> deleteTour(@PathVariable("id")String id){
        tourService.deleteTour(id);
        return  ResponseEntity.ok().body(new ApiResponse(true, "Delete Success"));
    }

    @GetMapping("/tour/type/{typeName}")
    public ResponseEntity<List<Tour>> getTourByType(@PathVariable("typeName")String typeName){
        return ResponseEntity.ok().body(tourService.getTourByType(typeName));
    }
}
