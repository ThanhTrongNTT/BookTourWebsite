package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Gender;
import nhom04.hcmute.repository.GenderRepository;
import nhom04.hcmute.service.GenderService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:24
 * Filename : GenderServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class GenderServiceImpl implements GenderService {
    private final GenderRepository genderRepository;
    @Override
    public List<Gender> getAllGenders() {
        log.info("Get all Genders");
        return genderRepository.findAll();
    }

    @Override
    public Gender getGenderById(String id) {
        log.info("Finding User with id {}",id);
        return genderRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("User with id %s not found",id)));
    }

    @Override
    public Gender saveGender(Gender gender) {
        log.info("Saving user!");
        return genderRepository.save(gender);
    }

    @Override
    public Gender updateGender(String id, Gender gender) {
        Gender updateGender = genderRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("User with id %s not found",id)));
        log.info("Update gender");
        updateGender.setGenderType(gender.getGenderType());
        Date date = new Date();
        updateGender.setModifiedAt(date);
        return genderRepository.save(updateGender);
    }

    @Override
    public void deleteGender(String id) {
        Gender deleteGender = genderRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("User with id %s not found",id)));
        log.info("Deleting Gender");
        genderRepository.delete(deleteGender);
    }
}
