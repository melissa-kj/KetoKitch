CREATE TABLE users (
    id SERIAL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(50),
    password VARCHAR(50),
    location VARCHAR(50),
    bio VARCHAR(200),
    profilePic STRING
);

CREATE TABLE inventory (
    id SERIAL,
    itemName VARCHAR(100) NOT NULL,
    description VARCHAR(100),
    price FLOAT,
    photo STRING,
    user_id FOREIGN KEY
);