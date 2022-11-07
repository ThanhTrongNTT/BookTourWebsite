package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Location;
import nhom04.hcmute.repository.LocationRepository;
import nhom04.hcmute.service.LocationService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:24
 * Filename : LocationServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class LocationServiceImpl implements LocationService {
    private final LocationRepository locationRepository;

    @Override
    public List<Location> getAllLocations() {
        log.info("Get all locations");
        return locationRepository.findAll();
    }

    @Override
    public List<Location> saveAll(List<Location> locationList) {
        log.info("Get all locations");
        return locationRepository.saveAll(locationList);
    }

    @Override
    public Location getLocationById(String id) {
        log.info("Find location with id {}", id);
        return locationRepository.findById(id)
                .orElseThrow(() ->new NotFoundException(String.format("Location with id %s not found", id)));
    }

    @Override
    public Location saveLocation(Location location) {
        log.info("Saving location!");
        return locationRepository.save(location);
    }

    @Override
    public Location updateLocation(String id, Location location) {
        Location updateLocation = locationRepository.findById(id)
                .orElseThrow(() ->new NotFoundException(String.format("Location with id %s not found", id)));
        log.info("Updating location");
        updateLocation.setLocationName(location.getLocationName());
        updateLocation.setLocationType(location.getLocationType());
        Date date = new Date();
        updateLocation.setModifiedAt(date);
        return locationRepository.save(updateLocation);
    }

    @Override
    public void deleteLocation(String id) {
        Location deleteLocation = locationRepository.findById(id)
                .orElseThrow(() ->new NotFoundException(String.format("Location with id %s not found", id)));
        log.info("Deleting location");
        locationRepository.delete(deleteLocation);
    }
}
