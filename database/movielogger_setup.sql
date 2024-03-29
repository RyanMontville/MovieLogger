BEGIN TRANSACTION;

DROP TABLE IF EXISTS user_lists, movies, users;

CREATE TABLE users (
	user_id serial NOT NULL,
	user_name varchar(50) NOT NULL UNIQUE,
	role varchar(50) NOT NULL,
	CONSTRAINT pk_user PRIMARY KEY (user_id)
);

CREATE TABLE movies (
	movie_id serial NOT NULL,
	imdb_id varchar(10) NOT NULL UNIQUE,
	title varchar(100) NOT NULL,
	year varchar(5),
	rated varchar(10),
	released varchar(20),
	runtime varchar(30),
	genre varchar(100),
	director varchar(50),
	writer varchar(100),
	actors varchar(100),
	awards varchar(100),
	poster text,
	plot text,
	type varchar(50),
	dvd varchar(30),
	box_office varchar(50),
	imdb_rating varchar(10),
	mc_rating varchar(10),
	CONSTRAINT pk_movie PRIMARY KEY (imdb_id)
);

CREATE TABLE user_lists (
	user_list_id serial NOT NULL,
	imdb_id varchar(10) NOT NULL,
	user_id int NOT NULL,
	list varchar(10) NOT NULL,
	rating int NULL,
	CONSTRAINT pk_user_lists PRIMARY KEY (user_list_id),
	CONSTRAINT fk_user_lists_imdb_id FOREIGN KEY (imdb_id) REFERENCES movies (imdb_id),
	CONSTRAINT fk_user_lists_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);

COMMIT;