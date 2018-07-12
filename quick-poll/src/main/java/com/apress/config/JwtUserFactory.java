package com.apress.config;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


import com.apress.domain.User;
import com.apress.config.dto.JwtUser;


public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getUsername(),
                user.getPassword(),
                user.getAuthorities(),
                user.isEnabled()
        );
    }

    /*private static List<GrantedAuthority> mapToGrantedAuthorities(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority))
                .collect(Collectors.toList());
    }*/
}
