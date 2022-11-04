package nhom04.hcmute.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 11/2/2022
 * Time     : 19:15
 * Filename : PageResponse
 */
@Data
@AllArgsConstructor
public class PageResponse {
    private List<?> data;
    private Integer currentPage;
    private Integer totalPage;
    private Integer lastPage;
}
