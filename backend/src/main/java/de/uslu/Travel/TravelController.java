package de.uslu.Travel;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

@RestController
@RequestMapping("/api/travel")
@RequiredArgsConstructor
@CrossOrigin
public class TravelController {

    private final TravelService travelService;

    @GetMapping
    public Collection<Travel> listOfTravel(String city) {
        return travelService.listTravels(city);
    }

    @PostMapping
    public Collection<Travel> createTravel(@RequestBody Travel travel) {
        travelService.createTravel(travel);
        return travelService.listTravels(travel.getCity());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        travelService.deleteTravelItem(id);
    }

}
