SELECT CompanyName as Fournisseur ,COUNT(UnitsOnOrder) as 'Nbre produits'
FROM Suppliers
Join Products on Products.SupplierID = Suppliers.SupplierID
WHERE Country ='France'
GROUP BY companyName
ORDER BY COUNT(UnitsOnOrder) DESC