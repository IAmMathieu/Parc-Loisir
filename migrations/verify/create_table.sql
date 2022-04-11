-- Verify OParc:create_db on pg

BEGIN;

SELECT id, "name", capacity, open_schedule, closed_schedule, duration, isMechanic FROM attraction WHERE FALSE;

SELECT id, billet_num, validation_start, validation_end, reservation FROM visiteur WHERE FALSE;

SELECT id, billet, attraction, participants, slot FROM reservation WHERE FALSE;

SELECT id, incident_id, nature, operator, resolution_date FROM incident WHERE FALSE;

SELECT id, attraction, incident, report_time FROM maintenance WHERE FALSE;

ROLLBACK;
