package de.uslu.Travel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Repository
public interface TravelRepo extends MongoRepository<Travel, String> {

    Collection<Travel> findAllByUsername(String username);
    Collection<Travel> deleteByIdAndUsername(String id, String username);
    List<Travel> findAllByStartDateBefore(LocalDateTime now);

}
