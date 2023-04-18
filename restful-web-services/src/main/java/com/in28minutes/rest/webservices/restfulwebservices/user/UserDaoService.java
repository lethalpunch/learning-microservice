package com.in28minutes.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
	
	private static int index = 0;

	private static List<User> users = new ArrayList<>();
	
	static {
		users.add(new User(++index,  "Adam", LocalDate.now().minusYears(30)));
		users.add(new User(++index,  "Eve", LocalDate.now().minusYears(25)));
		users.add(new User(++index,  "Jim", LocalDate.now().minusYears(30)));
	}
	
	public List<User> findAll() {
		return users;
	}

	public User findById(int id) {
		return users.stream().filter(u -> u.getId() == id).findFirst().orElse(null);
	}

	public void save(User user) {
		user.setId(++index);
		users.add(user);
	}
}
