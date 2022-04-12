-- Deploy OParc:create_db to pg

BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE attraction(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "capacity" INTEGER NOT NULL,
  "open_schedule" TIME(0) NOT NULL,
  "closed_schedule" TIME(0) NOT NULL,
  "duration" TIME(0) NOT NULL,
  "ismechanic" BOOLEAN NOT NULL,
  "isopen" BOOLEAN NOT NULL
);

CREATE TABLE visiteur(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "billet_num" uuid NOT NULL DEFAULT uuid_generate_v4() UNIQUE,
  "validation_start" TIME(0) NOT NULL,
  "validation_end" TIME(0) NOT NULL
);

CREATE TABLE reservation(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "billet" uuid REFERENCES visiteur("billet_num"),
  "attraction_id" INTEGER REFERENCES attraction("id"),
  "participants" INTEGER NOT NULL,
  "slot" TIME NOT NULL
);

CREATE TABLE incident(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "report_time" timestamptz,
  "attraction_id" INTEGER REFERENCES attraction(id),
  "nature" TEXT NOT NULL,
  "operator" TEXT NOT NULL,
  "resolution_date" TIME (0) DEFAULT NULL 
);

COMMIT;
