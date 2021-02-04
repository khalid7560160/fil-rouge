SELECT SUM(`order details`.`Quantity` * `order details`.`UnitPrice`) as "Montant Ventes 97"
FROM `order details`
JOIN orders on orders.OrderID = `order details`.OrderID
WHERE Orderdate LIKE "1997%";