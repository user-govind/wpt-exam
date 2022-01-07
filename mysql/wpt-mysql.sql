create database wptexam;

create database wptexam2;

use wptexam;

use wptexam2;

create table MESSAGE ( mid int primary key Auto_increment, message varchar(150) );

create table MESSAGE ( mid int, message varchar(150) );

insert into message (message) values ("hi");

select * from message order by mid desc;

drop table message

