CREATE DATABASE games_database1;
USE games_database1;
CREATE TABLE `user_profile` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(270) NOT NULL,
  `city_score` int(100),
  `geo_score` int(100),
  `football_score` int(100),
  `nonogram_score` int(100),
  `memory_score` int(100),
  `snake_score` int(100),
  `fifty_score` int(100)
);
​
CREATE TABLE `user_games` (
  `game_id` int,
  `user_id` int
);
​
CREATE TABLE `games` (
  `game_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `score` int
); ​
ALTER TABLE `user_games` ADD FOREIGN KEY (`game_id`) REFERENCES `games` (`game_id`);
 