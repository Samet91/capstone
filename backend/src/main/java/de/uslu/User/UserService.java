package de.uslu.User;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserDocument createUser(UserDocument user) {
        return userRepository.save(user);
    }
    public Optional<UserDocument> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}
