
----https://stackoverflow.com/questions/30887225/use-special-characters-%C3%A5%C3%A4%C3%B6-in-the-postgresql-shell

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    CHECK (LENGTH(password::TEXT) >= 6)
);
* VARCHAR tillåter både nummer och text

CREATE TABLE adminToken (
    admin_id INTEGER,
    token VARCHAR PRIMARY KEY,
    FOREIGN KEY (admin_id) REFERENCES admin(id)
);

Tabell för varukorgen
  CREATE TABLE carts (
      cart_id SERIAL PRIMARY KEY,
      session_id VARCHAR,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

tabell för items - produkter
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  pdf TEXT,
  price NUMERIC NOT NULL,
  type TEXT NOT NULL
);

tabell för vilka items (produkter) som finns i varukorgen
CREATE TABLE cart_items (
  cart_item_id SERIAL PRIMARY KEY,
  cart_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
  FOREIGN KEY (item_id) REFERENCES items(item_id)
);
