import pandas as pd
import numpy as np

def searchJumiaFashion():
    jumia_fashion = pd.read_csv('jumia_fashion.csv')
    available_product = {
    'image' : [],
    'product' : [],
    'price' : [],
    'link' : []
}
    #Prompt user search. 
    userInput = input('Enter product')
    
    product_name = jumia_fashion['Product_Name']
    
    # search through the database
    for product in product_name:
        if userInput in product:
#             print(jumia_fashion[jumia_fashion['Product_Name']==product])
            available_product['image'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Image'])
            available_product['product'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Product_Name'])
            available_product['price'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Price'])
            available_product['link'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Link'])
        

    #display result
    
    if len(available_product)==0:
        display = "Sorry! Out of stock"
        
    else:
        display = {
            'image' : [],
            'product' : [],
            'price' : [],
            'link' : []
        }

#         display = np.zeros((len(available_product),4))
        
        for i in range(len(available_product)):
            display['image'].append(available_product['image'][0].item())#image
            display['product'].append(available_product['product'][0].item())#product
            display['price'].append(available_product['price'][0].item())#price
            display['link'].append(available_product['link'][0].item())#link
            
    return pd.DataFrame(display)
    
searchJumiaFashion()