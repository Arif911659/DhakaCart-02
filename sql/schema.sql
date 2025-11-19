CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_users_email ON users(email);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL DEFAULT 0,
  stock INT DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP DEFAULT now()
);
CREATE INDEX idx_products_title ON products USING gin (to_tsvector('english', title));

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'pending',
  qty INT DEFAULT 1,
  total NUMERIC(10,2),
  shipping_address JSONB,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  provider VARCHAR(50),
  status VARCHAR(20) DEFAULT 'initiated',
  amount NUMERIC(10,2),
  meta JSONB,
  created_at TIMESTAMP DEFAULT now()
);

-- sample data
INSERT INTO users (name,email,password,role) VALUES ('Admin','admin@dhakacart.local','$2b$10$EXAMPLEHASH', 'admin');
INSERT INTO products (title,description,price,stock) VALUES 
('Dhaka T-Shirt','100% cotton, local print', 350.00, 50),
('Poribag Backpack','Durable bag for daily use', 1250.00, 25);
