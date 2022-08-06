import requests
from bs4 import BeautifulSoup
from time import sleep
from random import randint
from csv import writer

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
