import requests
from bs4 import BeautifulSoup
from time import sleep
from random import randint
from csv import writer
import pandas as pd

headers ={'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'}

# url ="https://www.jumia.co.ke/category-fashion-by-jumia/?page="

# for page_number in range(2,49):
#     current_url=(url+str(page_number))
#     print(current_url)
    
#     load_url=requests.get(current_url, headers=headers)
#     soup=BeautifulSoup(load_url.text, 'lxml')
#     with open('jumia_fashion.csv','a', encoding='utf-8') as file:
#         the_writer = writer(file)
#         header=['Image', 'Product_Name', 'Price', 'Link',]
#         the_writer.writerow(header)
#         for content in soup.find_all('article', {"class":"prd _fb col c-prd"}):
#             image_link=content.find('img',{"class":"img"})
#             image=image_link.get('data-src')
#             product_name=content.find('h3',{"class":"name"}).get_text()
#             price=content.find('div',{"class":"prc"}).get_text()
#             page_link=content.select_one('a[class="core"][href]')['href']  
#             product_content=[image, product_name, price, page_link]
#             the_writer.writerow(product_content)



# url ="https://www.jumia.co.ke/phones-tablets/?page="

# for page_number in range(2,49):
#     current_url=(url+str(page_number))
#     print(current_url)
    
#     load_url=requests.get(current_url, headers=headers)
#     soup=BeautifulSoup(load_url.text, 'lxml')
#     with open('jumia_phones.csv','a', encoding='utf-8') as file:
#         the_writer = writer(file)
#         header=['Image', 'Product_Name', 'Price', 'Link',]
#         the_writer.writerow(header)
#         for content in soup.find_all('article', {"class":"prd _fb col c-prd"}):
#             image_link=content.find('img',{"class":"img"})
#             image=image_link.get('data-src')
#             product_name=content.find('h3',{"class":"name"}).get_text()
#             price=content.find('div',{"class":"prc"}).get_text()
#             page_link=content.select_one('a[class="core"][href]')['href']  
#             product_content=[image, product_name, price, page_link]
#             the_writer.writerow(product_content)


# def shopit_phones():
#     url ="https://shopit.co.ke/mobile-phones/page-"

#     for page_number in range(1,6):
#         current_url=(url+str(page_number)+"/")
#         print(current_url)
        
#         load_url=requests.get(current_url, headers=headers)
#         soup=BeautifulSoup(load_url.text, 'lxml')
#         with open('shopit_phones.csv','w', encoding='utf-8') as file:
#             the_writer = writer(file)
#             header=['Image', 'Product_Name', 'Price', 'Link',]
#             the_writer.writerow(header)
#             for content in soup.find_all('div', {"class":"ut2-gl__body"}):
#                 image_link=content.select_one('img',{"class":"ty-pict.cm-image.lazyloaded"})
#                 image=image_link.get('data-src')
#                 product_name=content.find('a',{"class":"product-title"}).get_text()
#                 price=content.find('bdi').get_text()
#                 page_link=content.select_one('a[class="product-title"][href]')['href']  
#                 product_content=[image, product_name, price, page_link]
#                 the_writer.writerow(product_content)
# shopit_phones()