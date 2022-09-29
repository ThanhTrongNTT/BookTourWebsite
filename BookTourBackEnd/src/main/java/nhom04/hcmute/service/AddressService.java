package nhom04.hcmute.service;

import nhom04.hcmute.model.Address;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:22
 * Filename : AddressService
 */
public interface AddressService {
    List<Address> getAllAddresses();
    Address getById(String id);
    Address saveAddress(Address address);
    Address updateAddress(String id,Address address);
    void deleteAddress(String id);
}
