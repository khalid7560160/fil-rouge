SELECT (customers.CompanyName) AS `Client`, COUNT(orderid) AS `Nbre commandes`
FROM customers
	JOIN orders ON orders.CustomerID =customers.CustomerID
WHERE Country='France'
GROUP BY CompanyName
HAVING COUNT(orderid) > 10