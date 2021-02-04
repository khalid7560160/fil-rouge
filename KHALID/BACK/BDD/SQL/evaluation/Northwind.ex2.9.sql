SELECT MAX(orders.OrderDate) as "Date de dernière commande"
FROM orders
JOIN customers ON customers.CustomerID = orders.CustomerID
WHERE customers.CompanyName = "Du monde entier";