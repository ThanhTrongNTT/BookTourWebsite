package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Location;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.service.LocationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:17
 * Filename : LocationController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class LocationController {
    private final LocationService locationService;

    @GetMapping("/locations")
    public ResponseEntity<List<Location>> getAllLocation(){
        return ResponseEntity.ok().body(locationService.getAllLocations());
    }
    @PostMapping("/locations")
    public ResponseEntity<List<Location>> saveAll(@RequestBody List<Location> locationList){
        return ResponseEntity.ok().body(locationService.saveAll(locationList));
    }
    @GetMapping("/location/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable("id")String id){
        return ResponseEntity.ok().body(locationService.getLocationById(id));
    }

    @PostMapping("/location/save")
    public ResponseEntity<ApiResponse> saveLocation(@RequestBody Location location){
        Location saveLocation = locationService.saveLocation(location);
        return ResponseEntity.ok().body(new ApiResponse(true,"Save success!"));
    }
    @PutMapping("/location/{id}")
    public ResponseEntity<ApiResponse> updateLocation(@PathVariable("id")String id, Location location){
        Location updateLocation = locationService.updateLocation(id,location);
        return ResponseEntity.ok().body(new ApiResponse(true,"Update Success!"));
    }

    @DeleteMapping("/location/delete/{id}")
    public ResponseEntity<ApiResponse> deleteLocation(@PathVariable("id")String id){
        locationService.deleteLocation(id);
        return ResponseEntity.ok().body(new ApiResponse(true,"Delete success!"));
    }
}
