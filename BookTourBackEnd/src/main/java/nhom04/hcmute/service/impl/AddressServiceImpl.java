package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Address;
import nhom04.hcmute.repository.AddressRepository;
import nhom04.hcmute.service.AddressService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:24
 * Filename : AddressServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AddressServiceImpl implements AddressService {
    private final AddressRepository addressRepository;
    @Override
    public List<Address> getAllAddresses() {
        log.info("Get all addresses!");
        return addressRepository.findAll();
    }

    @Override
    public Address getById(String id) {
        log.info("Finding Address!!");
        return addressRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Address with id %s not found!!",id)));
    }

    @Override
    public Address saveAddress(Address address) {
        log.info("Saving Address");
        return addressRepository.save(address);
    }

    @Override
    public Address updateAddress(String id,Address address) {
        log.info("Updating Address");
        Address addressUpdate = addressRepository.findById(id)
                .orElseThrow(()-> new NotFoundException(String.format("Address with id %s not found!!",id)));
        addressUpdate.setStreet(address.getStreet());
        addressUpdate.setDistrict(address.getDistrict());
        addressUpdate.setCity(address.getCity());
        Date date = new Date();
        addressUpdate.setModifiedAt(date);
        return addressRepository.save(address);
    }

    @Override
    public void deleteAddress(String id) {
        log.info("Deleting Address");
        Address address = addressRepository.findById(id)
                        .orElseThrow(()-> new NotFoundException(String.format("Address with id %s not found!!",id)));
        addressRepository.deleteById(id);
    }
}
