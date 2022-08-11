import requests
from bs4 import BeautifulSoup
from time import sleep
from random import randint
from csv import writer
<<<<<<< HEAD

headers ={'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'}

def killamall_fashion_page():
    url ="https://www.kilimall.co.ke/new/commoditysearch?c=1294&page="

    for page_number in range(1,50):
        load_web = requests.get(url+str(page_number), headers=headers)
        # print(load_web)
        soup = BeautifulSoup(load_web.content, 'html.parser')
        fetch_content = soup.find_all('section',class_="el-container")
        with open('fashion_killamall.csv','w', encoding='utf-8') as f:
            the_writer = writer(f)
            header=['Image','Link','Product_Name', 'Price']
            the_writer.writerow(header)

       
            for content in fetch_content:
                image=content.find('img', class_='imgClass')
                image.get('data-src')
                link=content.select_one('a[class="showHand"][href]')['href']
                product_name=content.find('div', class_='').text
                price=content.find('span', class_="twoksh").text

                product_info=[image, link, product_name, price]
                the_writer.writerow(product_info)
        sleep(randint(3,10))
killamall_fashion_page()
=======
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





# url ="https://www.kilimall.co.ke/new/commoditysearch?c=1057&page="  #Source URL
#     # Changes the page number
# for page_number in range(1,5):
#     load_web = requests.get(url+str(page_number), headers=headers)
#     # End Page Number Changes
#     soup = BeautifulSoup(load_web.content, 'html.parser')  #Get the URL Content to html
#   #Search for the parent div class of the product page
#     #Write to the CSV file from the soup refined content
#     # with open('mobilephone_kilimall.csv','w', encoding='utf-8') as f:
#     #     the_writer = writer(f)
#     #     header=['Image','Link','Product_Name', 'Price']
#     #     the_writer.writerow(header)

#     for content in soup.find_all('section',class_="el-container"):
#         image=content.find('img', class_='imgClass')
#         image.get('data-src')
#         link=content.select_one('a[class="showHand"][href]')['href']
#         product_name=content.find('div', class_='').text
#         price=content.find('span', class_="twoksh").text

#         product_info=[image, link, product_name, price]
#         # the_writer.writerow
#         print(product_info)
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
