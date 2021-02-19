SELECT productName as 'Produit' ,unitprice as 'Prix'
FROM Products
Join Suppliers on Suppliers.SupplierID = Products.SupplierID
WHERE CompanyName = 'exotic liquids'