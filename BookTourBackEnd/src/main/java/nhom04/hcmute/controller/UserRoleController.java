package nhom04.hcmute.controller;

import nhom04.hcmute.model.Role;
import nhom04.hcmute.payload.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:17
 * Filename : UserRoleController
 */
@RestController
@RequestMapping("/api/v1")
public class UserRoleController {

    @PostMapping("/role/save")
    public ResponseEntity<ApiResponse> saveRole(@RequestBody Role role){
        return ResponseEntity.ok().body(new ApiResponse(true,"Add role success!"));
    }
    @PostMapping("/role/addroletouser/{username}")
    public ResponseEntity<ApiResponse> addRoleToUser(@PathVariable("username") String username,@RequestBody Role role){
        return ResponseEntity.ok().body(new ApiResponse(true,"Add role to user success"));
    }
}
