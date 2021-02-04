SELECT DISTINCT  `orders`.`ShipCountry` as `Pays`
FROM (((`orders`
		JOIN `order details` on `order details`.`OrderID` = `orders`.`OrderID`)
		JOIN `products` on `products`.`ProductID` = `order details`.`ProductID`)
		JOIN `suppliers` on `suppliers`.`SupplierID` = `products`.`SupplierID`)
WHERE `suppliers`.`CompanyName` = "Exotic Liquids"
ORDER BY `Pays` ASC;