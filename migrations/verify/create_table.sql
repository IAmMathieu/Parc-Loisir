-- Verify OParc:create_db on pg

BEGIN;

SELECT attraction.id, attraction.name, attraction.capacity, attraction.open_schedule, attraction.closed_schedule, attraction.duration, attraction.ismechanic, attraction.isopen FROM attraction WHERE FALSE;

SELECT visiteur.id, visiteur.billet_num, visiteur.validation_start, visiteur.validation_end FROM visiteur WHERE FALSE;

SELECT reservation.id, reservation.billet, reservation.attraction_id, reservation.participants, reservation.slot FROM reservation WHERE FALSE;

SELECT incident.id, incident.nature, incident.operator, incident.resolution_date FROM incident WHERE FALSE;

ROLLBACK;
