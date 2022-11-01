package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Booking;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:16
 * Filename : BookingController
 */
@RestController
@RequestMapping("/api/v1/booking")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService bookingService;

    @GetMapping()
    public ResponseEntity<List<Booking>> getAllBookings(){
        return ResponseEntity.ok().body(bookingService.getAllBookings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id")String id){
        return ResponseEntity.ok().body(bookingService.getById(id));
    }
    @GetMapping("/user/{email}")
    public ResponseEntity<List<Booking>> getBookingByUser(@PathVariable("email")String email){
        return ResponseEntity.ok().body(bookingService.getBookingByUser(email));
    }

    @PostMapping("/save")
    public ResponseEntity<ApiResponse> saveBooking(@RequestBody Booking booking){
        Booking saveBooking = bookingService.saveBooking(booking);
        return ResponseEntity.ok().body(new ApiResponse(true, "Save Booking success!"));
    }
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateBooking(@PathVariable("id")String id, Booking booking){
        Booking updateBooking = bookingService.updateBooking(id,booking);
        return ResponseEntity.ok().body(new ApiResponse(true, "Update success!"));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteBooking(@PathVariable("id")String id){
        bookingService.deleteBooking(id);
        return ResponseEntity.ok().body(new ApiResponse(true,"Delete Booking success!"));
    }
}
