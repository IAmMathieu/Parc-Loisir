-- Deploy OParc:create_db to pg

BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE attraction(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "capacity" INTEGER NOT NULL,
  "open_schedule" TIME NOT NULL,
  "closed_schedule" TIME NOT NULL,
  "duration" TIME NOT NULL,
  "isMechanic" BOOLEAN NOT NULL
);

CREATE TABLE visiteur(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "billet_num" uuid NOT NULL DEFAULT uuid_generate_v4() UNIQUE,
  "validation_start" TIME NOT NULL,
  "validation_end" TIME NOT NULL
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
  "incident_id" TEXT NOT NULL UNIQUE,
  "nature" TEXT NOT NULL,
  "operator" TEXT NOT NULL,
  "resolution_date" TIME DEFAULT NULL 
);

CREATE TABLE maintenance(
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "attraction_id" INTEGER REFERENCES attraction("id"),
  "incident_id" TEXT REFERENCES incident("incident_id"),
  "report_time" TIMESTAMPTZ DEFAULT NOW()
);

COMMIT;
