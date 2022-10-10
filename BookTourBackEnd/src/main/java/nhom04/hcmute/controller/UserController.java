package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:16
 * Filename : UserController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUser(){
        return ResponseEntity.ok().body(userService.getAllUsers());
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable("email")String email){
        return ResponseEntity.ok().body(userService.getUserByEmail(email));
    }
    @PostMapping("/user/update/{id}")
    public ResponseEntity<ApiResponse> getUserByEmail(@PathVariable("id")String id, User user){
        User updateUser = userService.updateUser(id,user);
        return ResponseEntity.ok().body(new ApiResponse(true,"Update success!"));
    }
    @DeleteMapping("/user/delete/{email}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("email")String email){
        userService.deleteUser(email);
        return ResponseEntity.ok().body(new ApiResponse(true,"Delete success"));
    }
}
