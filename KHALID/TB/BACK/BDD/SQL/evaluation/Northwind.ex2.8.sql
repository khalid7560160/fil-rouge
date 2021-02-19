SELECT MONTH(`orders`.`OrderDate`) as `Mois 97`, SUM(`order details`.`UnitPrice` * `order details`.`Quantity`) as `Montant Ventes`
FROM `order details`
JOIN `orders` on `orders`.`OrderID` = `order details`.`OrderID`
WHERE `orders`.`OrderDate` LIKE '1997%' 
GROUP BY `Mois 97`
;