SELECT 	customers.CompanyName as `Client`, SUM(`order details`.`UnitPrice` * `order details`.`Quantity`) as `CA`, customers.Country as `Pays`
FROM ((`customers` JOIN orders on orders.CustomerID = customers.CustomerID) JOIN `order details` on `order details`.OrderID= orders.OrderID)
GROUP BY customers.CustomerID
HAVING CA > 30000 
ORDER BY CA DESC;