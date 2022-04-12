-- Verify OParc:maintenance_view on pg

BEGIN;

SELECT id, report_time, attraction_name, nature, operator, attraction_os, attraction_cs, resolution_date FROM maintenance WHERE FALSE;

ROLLBACK;
