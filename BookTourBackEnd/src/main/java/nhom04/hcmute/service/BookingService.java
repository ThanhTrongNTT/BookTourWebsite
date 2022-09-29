package nhom04.hcmute.service;

import nhom04.hcmute.model.Booking;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:22
 * Filename : BookingService
 */
public interface BookingService {
    List<Booking> getAllBookings();

    Booking getById(String id);

    Booking saveBooking(Booking booking);

    Booking updateBooking(String id, Booking booking);

    void deleteBooking(String id);
}
