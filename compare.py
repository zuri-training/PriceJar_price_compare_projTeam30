import pandas as pd
import numpy as np

# def searchJumiaFashion():
#     jumia_fashion = pd.read_csv('jumia_fashion.csv')
#     available_product = {
#     'image' : [],
#     'product' : [],
#     'price' : [],
#     'link' : []
# }
#     #Prompt user search. 
#     userInput = input('Enter product : ')
    
#     product_name = jumia_fashion['Product_Name']
    
#     # search through the database
#     for product in product_name:
#         if userInput in product:
# #             print(jumia_fashion[jumia_fashion['Product_Name']==product])
#             available_product['image'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Image'])
#             available_product['product'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Product_Name'])
#             available_product['price'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Price'])
#             available_product['link'].append(jumia_fashion[jumia_fashion['Product_Name']==product]['Link'])
        

#     #display result
    
#     if len(available_product)==0:
#         display = "Sorry! Out of stock"
        
#     else:
#         display = {
#             'image' : [],
#             'product' : [],
#             'price' : [],
#             'link' : []
#         }

# #         display = np.zeros((len(available_product),4))
        
#         for i in range(len(available_product)):
#             display['image'].append(available_product['image'][0].item())#image
#             display['product'].append(available_product['product'][0].item())#product
#             display['price'].append(available_product['price'][0].item())#price
#             display['link'].append(available_product['link'][0].item())#link
            
#     print(display)

csv1 = 'jumia_phones.csv'
csv2 = 'shopit_phones.csv'
def compareProduct(csv1, csv2):

    userInput = input('Enter product : ').title()

    jumia_phone = pd.read_csv(csv1)
    shopit_phone = pd.read_csv(csv2)

    # print(jumia_phone.query('Product_Name == @userInput'))
    jumia_result = jumia_phone.loc[jumia_phone['Product_Name'].str.contains(userInput,case=False)]
    shopit_result = shopit_phone.loc[jumia_phone['Product_Name'].str.contains(userInput,case=False)]

    jumia_result['Price'] = jumia_result['Price'].str.replace('KSh','')
    jumia_sorted = jumia_result.sort_values(by="Price",ascending=True,kind="mergesort")

    shopit_result['Price'] = shopit_result['Price'].str.replace('KSh','')
    shopit_sorted = shopit_result.sort_values(by="Price",ascending=True,kind="mergesort")
    print(jumia_sorted['Price'])
    
compareProduct(csv1, csv2)


    # available_product = {
    #     'jumia' : {
    #         'image' : [],
    #         'product' : [],
    #         'price' : [],
    #         'link' : []
    #     },

    #     'shopit' :{
    #         'image' : [],
    #         'product' : [],
    #         'price' : [],
    #         'link' : []
    #     }
    # }

    # jumia_product_name = jumia_phone['Product_Name']
    # shopit_product_name = shopit_phone['Product_Name']

    # search through the database for jumia
#     for product in jumia_product_name:
#         if userInput in product:
# #             print(jumia_fashion[jumia_fashion['Product_Name']==product])
#             available_product['jumia']['image'].append(jumia_phone[jumia_phone['Product_Name']==product]['Image'])
#             available_product['jumia']['product'].append(jumia_phone[jumia_phone['Product_Name']==product]['Product_Name'])
#             available_product['jumia']['price'].append(jumia_phone[jumia_phone['Product_Name']==product]['Price'])
#             available_product['jumia']['link'].append(jumia_phone[jumia_phone['Product_Name']==product]['Link'])

#     for product in shopit_product_name:
#         if userInput in product:
# #             print(jumia_fashion[jumia_fashion['Product_Name']==product])
#             available_product['shopit']['image'].append(shopit_phone[shopit_phone['Product_Name']==product]['Image'])
#             available_product['shopit']['product'].append(shopit_phone[shopit_phone['Product_Name']==product]['Product_Name'])
#             available_product['shopit']['price'].append(shopit_phone[shopit_phone['Product_Name']==product]['Price'])
#             available_product['shopit']['link'].append(shopit_phone[shopit_phone['Product_Name']==product]['Link'])


    # jumia_price = available_product['jumia']['price']
    # shopit_price = available_product['shopit']['price']
    # display = {
    #         'jumia' : {
    #             'image' : [],
    #             'product' : [],
    #             'price' : [],
    #             'link' : []
                
    #         },

    #         'shopit':{
    #             'image' : [],
    #             'product' : [],
    #             'price' : [],
    #             'link' : []
    #         }

    #     }
    
    # print(type(jumia_price))
    # for i in range(len(available_product)):
    #         display['jumia']['image'].append(available_product['image'][0].item())#image
    #         display['jumia']['product'].append(available_product['product'][0].item())#product
    #         display['jumia']['price'].append(available_product['price'][0].item())#price
    #         display['jumia']['link'].append(available_product['link'][0].item())#link

    # price_list = []
    # print(type(jumia_price[0][1]))
    # for price in jumia_price:
        # print(type(price))
        # print(price.to_string())
    # print(len(available_product['jumia']['price']))
    # for price in range(len(jumia_price)):
    #     print(jumia_price[price][1])
        # price_list.append((int(''.join(filter(str.isdigit, jumia_price[price][1].item())))))
        # price_list = [int(new_string) for new_string in str.split(jumia_price[price][1]) if new_string.isdigit()]
    # print(price_list)
#searchJumiaFashion()
    # print(sorted(price_list))
    # available_jumia_product = available_product['jumia']
#     for a_price in jumia_price:
#         print(a_price)
#         for b_price in price_list:
#             if b_price in a_price:
# #             print(jumia_fashion[jumia_fashion['Product_Name']==product])
#                 available_product['jumia']['image'].append(jumia_phone[jumia_phone['Product_Name']==product]['Image'])
#                 available_product['jumia']['product'].append(jumia_phone[jumia_phone['Product_Name']==product]['Product_Name'])
#                 available_product['jumia']['price'].append(jumia_phone[jumia_phone['Product_Name']==product]['Price'])
#                 available_product['jumia']['link'].append(jumia_phone[jumia_phone['Product_Name']==product]['Link'])
#     ordered_jumia_product = available_product['jumia']
    # print(ordered_jumia_product)