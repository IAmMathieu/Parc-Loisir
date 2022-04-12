-- Revert OParc:maintenance_view from pg

BEGIN;

DROP VIEW maintenance;

COMMIT;
