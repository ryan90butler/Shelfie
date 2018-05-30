UPDATE shelf_data
SET name = $1, price = $2 WHERE shelf = $3 and bin =$4;

-- SELECT * FROM shelf_data
-- where shelf = $1 and bin =$2;