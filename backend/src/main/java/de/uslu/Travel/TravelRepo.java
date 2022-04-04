package de.uslu.Travel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface TravelRepo extends MongoRepository<Travel, String> {
    
    Collection<Travel> findAllByCity(String city);
    Collection<Travel> findAllByUsername(String username);
    Collection<Travel> deleteByIdAndUsername(String id, String username);

}
