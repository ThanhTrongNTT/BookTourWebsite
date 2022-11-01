package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.DeleteRequest;
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
    public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email){
        return ResponseEntity.ok().body(userService.getUserByEmail(email));
    }
    @PutMapping("/user/{email}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable("email")String email,@RequestBody User user){
        User updateUser = userService.updateUser(email,user);
        return ResponseEntity.ok().body(new ApiResponse(true,"Update success!"));
    }
    @PutMapping("/user/avt/{email}")
    public ResponseEntity<ApiResponse> updateAvatar(@PathVariable("email")String email,@RequestBody String avatar){
        User updateUser = userService.updateAvatar(email,avatar);
        return ResponseEntity.ok().body(new ApiResponse(true,"Update success!"));
    }
    @DeleteMapping("/user/delete")
    public ResponseEntity<ApiResponse> deleteUser(@RequestBody DeleteRequest deleteRequest){
        userService.deleteUser(deleteRequest.getDeleteField());
        return ResponseEntity.ok().body(new ApiResponse(true,"Delete success"));
    }
    @PostMapping("/user/changePass/{email}")
    public ResponseEntity<ApiResponse> changePassword(@PathVariable("email")String email){
        userService.changePassword("trong",email);
        return ResponseEntity.ok().body(new ApiResponse(true,"Change password success!"));
    }
}
