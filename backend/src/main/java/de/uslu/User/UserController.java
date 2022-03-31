package de.uslu.User;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
        public UserDocument createUser (@RequestBody UserDocument user) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return userService.createUser(user);
    }

}
