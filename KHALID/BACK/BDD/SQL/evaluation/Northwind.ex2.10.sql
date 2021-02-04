SELECT ROUND (AVG(DATEDIFF(`orders`.`ShippedDate`, `orders`.`OrderDate`)), 0) as 'Délai moyen de livraison en jours'
FROM `orders`;
