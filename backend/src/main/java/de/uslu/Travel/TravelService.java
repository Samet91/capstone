package de.uslu.Travel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class TravelService {

    private final TravelRepo travelRepo;

    public Collection<Travel> listTravels() {
        return travelRepo.findAll();
    }

    public Travel createTravel(Travel travel) {
         return travelRepo.save(travel);
    }

    public void deleteTravelItem(String id) {
        travelRepo.deleteById(id);
    }
}
