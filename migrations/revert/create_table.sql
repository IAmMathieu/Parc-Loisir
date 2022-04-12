-- Revert OParc:create_db from pg

BEGIN;

DROP TABLE attraction,visiteur,reservation,incident CASCADE;

COMMIT;
