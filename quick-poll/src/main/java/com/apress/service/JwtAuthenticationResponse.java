package com.apress.service;



import java.io.Serializable;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;


/**
 * Created by stephan on 20.03.16.
 */
public class JwtAuthenticationResponse implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String username;
    private final String fullname;
    Collection<? extends GrantedAuthority> authorities;

    public JwtAuthenticationResponse(String username, Collection<? extends GrantedAuthority> authorities, String fullname) {
    	this.username = username;
        this.authorities = authorities;
        this.fullname = fullname;
    }
    
    public String getFullname() {
    	return this.fullname;
    }

    public String getUsername() {
        return this.username;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
}
