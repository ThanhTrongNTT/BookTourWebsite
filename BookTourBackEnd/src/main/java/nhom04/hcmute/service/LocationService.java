package nhom04.hcmute.service;

import nhom04.hcmute.model.Location;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:22
 * Filename : LocationService
 */
public interface LocationService {
    List<Location> getAllLocations();
    Location getLocationById(String id);
    Location saveLocation(Location location);
    Location updateLocation(String id, Location location);
    void deleteLocation(String id);
}
