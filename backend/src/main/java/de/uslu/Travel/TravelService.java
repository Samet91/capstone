package de.uslu.Travel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class TravelService {

    private final TravelRepo travelRepo;

    public Collection<Travel> listTravels(String username) {
        return travelRepo.findAllByUsername(username);
    }

    public Travel createTravel(Travel travel, String name) {
         travel.setUsername(name);
         return travelRepo.save(travel);
    }

    public void deleteTravelItem(String id, String username) {
        travelRepo.deleteByIdAndUsername(id, username);
    }
}
