package nhom04.hcmute.service;

import nhom04.hcmute.model.Gender;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:22
 * Filename : GenderService
 */
public interface GenderService {
    List<Gender> getAllGenders();
    Gender getGenderById(String id);
    Gender saveGender(Gender gender);
    Gender updateGender(String id, Gender gender);
    void deleteGender(String id);
}
