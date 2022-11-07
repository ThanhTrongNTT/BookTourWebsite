package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Booking;
import nhom04.hcmute.repository.BookingRepository;
import nhom04.hcmute.service.BookingService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:24
 * Filename : BookingServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    @Override
    public List<Booking> getAllBookings() {
        log.info("Get all bookings");
        return bookingRepository.findAll();
    }

    @Override
    public List<Booking> saveAll(List<Booking> bookingList) {
        log.info("Save all bookings");
        return bookingRepository.saveAll(bookingList);
    }

    @Override
    public List<Booking> getBookingByUser(String email) {
        return bookingRepository.getBookingByUser(email);
    }

    @Override
    public Booking getById(String id) {
        log.info("Get user by id {}",id);
        return bookingRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("User with id %s not found",id)));
    }

    @Override
    public Booking saveBooking(Booking booking) {
        log.info("Saving Booking");
        return bookingRepository.save(booking);
    }

    @Override
    public Booking updateBooking(String id, Booking booking) {
        Booking updateBooking = bookingRepository.findById(id)
                .orElseThrow(()-> new NotFoundException(String.format("User with id %s not found",id)));
        log.info("Update booking");
        updateBooking.setTour(booking.getTour());
        updateBooking.setEnable(booking.isEnable());
        updateBooking.setUser(booking.getUser());
        Date date  = new Date();
        updateBooking.setModifiedAt(date);
        return bookingRepository.save(updateBooking);
    }

    @Override
    public void deleteBooking(String id) {
        Booking deleteBooking = bookingRepository.findById(id)
                .orElseThrow(()-> new NotFoundException(String.format("User with id %s not found",id)));
        log.info("Deleting booking");
        bookingRepository.delete(deleteBooking);
    }
}
