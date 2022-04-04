package de.uslu.Travel;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collection;
import java.util.List;


class TravelServiceTest {

    @Test
    void shouldReturnAllTravels() {

        Travel travel1 = new Travel();
        Travel travel2 = new Travel();

        TravelRepo mockRepo = Mockito.mock(TravelRepo.class);
        Mockito.when(mockRepo.findAllByUsername("user1")).thenReturn(List.of(travel1,travel2));

        TravelService travelService = new TravelService(mockRepo);
        Collection<Travel> actual = travelService.listTravels("user1");

        Assertions.assertThat(actual.size()).isEqualTo(2);
    }

    @Test
    void shouldReturnCreatedTravel() {

        Travel travel = new Travel();
        travel.setCity("Hamburg");
        travel.setNotes("kalt");

        TravelRepo mockRepo = Mockito.mock(TravelRepo.class);
        Mockito.when(mockRepo.save(travel)).thenReturn(travel);

        TravelService travelService = new TravelService(mockRepo);
        Travel actual = travelService.createTravel(travel, "user1");
        Assertions.assertThat(actual).isSameAs(travel);
    }

    @Test
    void shouldDeleteOneTravel() {
        Travel travel = new Travel();
        travel.setCity("Hamburg");

        TravelRepo mockedRepo = Mockito.mock(TravelRepo.class);
        mockedRepo.deleteById(travel.getId());
        Mockito.verify(mockedRepo).deleteById(travel.getId());
    }

    @Test
    void shouldDeleteAllTravels() {
        Travel travel = new Travel();
        Travel travel2 = new Travel();
        travel.setCity("Hamburg");
        travel2.setCity("Berlin");

        TravelRepo mockedRepo = Mockito.mock(TravelRepo.class);
        mockedRepo.deleteAll();
        Mockito.verify(mockedRepo).deleteAll();
    }

}