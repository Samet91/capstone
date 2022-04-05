package de.uslu.Travel;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

@RestController
@RequestMapping("/api/travel")
@RequiredArgsConstructor
public class TravelController {

    private final TravelService travelService;

    @GetMapping
    public Collection<Travel> listOfTravel(Principal principal) {
        return travelService.listTravels(principal.getName());
    }

    @PostMapping
    public Collection<Travel> createTravel(@RequestBody Travel travel, Principal principal) {
        travelService.createTravel(travel, principal.getName());
        return travelService.listTravels(principal.getName());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id, Principal principal) {
        travelService.deleteTravelItem(id, principal.getName());
    }

    @GetMapping("/before")
    public Collection<Travel> listDatesAfterToday(Principal principal) {
       return travelService.listDatesAfterToday(principal.getName());
    }
}
