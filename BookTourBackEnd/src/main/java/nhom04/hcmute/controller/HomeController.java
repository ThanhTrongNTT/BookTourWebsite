package nhom04.hcmute.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sat, 9/3/2022
 * Time     : 09:52
 * Filename : HomeController
 */
@RestController
@RequestMapping("api/v1/home")
public class HomeController {

    @GetMapping("")
    public String homeController(){
        return "Hello World!";
    }

    @PostMapping("")
    public String addTour(){
        return "Add Success";
    }
}
