package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Booking;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.BookingRequest;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.repository.BookingRepository;
import nhom04.hcmute.repository.TourRepository;
import nhom04.hcmute.repository.UserRepository;
import nhom04.hcmute.service.BookingService;
import nhom04.hcmute.service.ClientService;
import nhom04.hcmute.util.page.SetPageResponseImpl;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
    private final UserRepository userRepository;
    private final TourRepository tourRepository;

    private final ClientService clientService;
    private final SetPageResponseImpl<Booking> setPageResponse;

    @Override
    public PageResponse getBookingPaging(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Page<Booking> bookings = bookingRepository.findAll(PageRequest.of(pageNo, pageSize, sort));
        log.info("Get all bookings pagination");
        return setPageResponse.pageResponse(bookings);
    }


    @Override
    public List<Booking> getBookingByUser(String email) {
        Booking booking = new Booking();
        User user = new User();
        user.setEmail(email);
        booking.setUser(user);
        Example<Booking> example = Example.of(booking);
        log.info("Looking Booking");
        List<Booking> bookings = bookingRepository.findAll(example);
        return bookings;
    }

    @Override
    public Booking getById(String id) {
        log.info("Get user by id {}",id);
        return bookingRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("User with id %s not found",id)));
    }

    @Override
    public Booking createBooking(BookingRequest booking) {
        Booking save = new Booking();
        User user = userRepository.findByEmail(booking.getEmail()).orElse(null);
        Tour tour = tourRepository.findById(booking.getTourId()).orElse(null);
        save.setUser(user);
        save.setTour(tour);
        clientService.activeBooking(booking.getEmail(),booking.getTourId());
        log.info("Saving Booking");
        return bookingRepository.save(save);
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

    @Override
    public Boolean activeBooking(String email, String id) {
        Booking booking = new Booking();
        Tour tour = new Tour();
        User user = new User();
        tour.setId(id);
        user.setEmail(email);
        booking.setTour(tour);
        booking.setUser(user);
        Example<Booking> example = Example.of(booking);
        Booking activeBooking = bookingRepository.findOne(example).orElse(null);
        if(activeBooking!=null){
            activeBooking.setEnable(true);
            bookingRepository.save(activeBooking);
            return true;
        }
        return false;
    }
}
