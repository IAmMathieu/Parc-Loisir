-- Deploy OParc:maintenance_view to pg

BEGIN;

CREATE OR REPLACE VIEW maintenance AS 
SELECT incident.id
	, incident.report_time
	, attraction.name as attraction_name
	, incident.nature, incident.operator
	, attraction.open_schedule as attraction_os
	, attraction.closed_schedule as attraction_cs
	, incident.resolution_date
FROM incident
INNER JOIN attraction ON attraction.id = attraction_id;

COMMIT;
