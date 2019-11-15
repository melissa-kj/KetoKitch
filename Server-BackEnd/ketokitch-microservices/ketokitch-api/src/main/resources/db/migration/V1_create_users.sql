CREATE TABLE users (
    id SERIAL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(50),
    password VARCHAR(50),
    location VARCHAR(50),
    bio VARCHAR(500),
    profilePic VARCHAR(200)
);

CREATE TABLE recipe (
    id SERIAL,
    title VARCHAR(150) NOT NULL,
    image VARCHAR(200),
    prep_time VARCHAR(100),
    net_carbs VARCHAR(100),
    ingredients VARCHAR(10000),
    instructions VARCHAR(10000),
    user_id FOREIGN KEY
);