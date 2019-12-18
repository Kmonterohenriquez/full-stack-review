create table customers(
    customer_id serial primary key,
    email varchar(100) not null ,
    password varchar(250) not NULL
);

create table review_products(
    product_id serial primary key,
    product_name varchar(50),
    product_image varchar(250),
    product_description text,
    price decimal
                
);

CREATE TABLE customer_order(
    customer_order_id serial primary key,
    customer_id int REFERENCES customers(customer_id),
    paid boolean
);


create table order_items(
    order_item_id serial primary key,
    customer_order_id int REFERENCES customer_order(customer_order_id),
    product_id int REFERENCES review_products(product_id),
    qty int,
    price decimal
);