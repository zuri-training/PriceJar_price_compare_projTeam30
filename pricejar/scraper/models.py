from django.db import models
from django.utils.translation import gettext as _

# Create your models here.
import requests
from bs4 import BeautifulSoup
from time import sleep
from random import randint
from csv import writer

headers ={'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'}

def jumia_mobile_phone_page():
    url ="https://www.jumia.co.ke/phones-tablets/?page="    #Source URL
    # Changes the page number
    for page_number in range(1,50):
        load_web = requests.get(url+str(page_number)+"#catalog-listing", headers=headers)
    # End Page Number Changes
        soup = BeautifulSoup(load_web.content, 'html.parser') #Get the URL Content to html
        fetch_content = soup.find_all('div', class_="row _no-g _6cl-4cm-shs -paxs _1ln") #Search for the parent div class of the product page
        #Write to the CSV file from the soup refined content
        with open('mobilephone_jumia.csv','w', encoding='utf-8') as f: 
            the_writer = writer(f)
            header=['Image','Link','Product_Name', 'Price']
            the_writer.writerow(header)
            for content in fetch_content:
                image=content.find('img', class_='img') #   Get image url through img tags in the parent - child class
                image.get('data-src')
                link=content.select_one('a[class="core"][href]')['href'] #Get link url through a tag in the parent - child class
                product_name=content.find('div',class_="name").text #Get name through div tag in the parent - child class
                price=content.find('div',class_='prc').text #Get price through div tag in the parent - child class
                product_info=[image,link,product_name,price]
                the_writer.writerow(product_info)
        #End Writing
                sleep(randint(3,15)) #To mute process after click to sitmulate Human Interaction 
jumia_mobile_phone_page()


class JumiaMobilePhoneModel(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.IntegerField(_("Price"))

    def __str__(self):
        return self.product_name

def mobile_phone_killamall():
    url ="https://www.kilimall.co.ke/new/commoditysearch?c=1057&page="  #Source URL
     # Changes the page number
    for page_number in range(1,50):
        load_web = requests.get(url+str(page_number), headers=headers)
     # End Page Number Changes
        soup = BeautifulSoup(load_web.content, 'html.parser')  #Get the URL Content to html
        fetch_content = soup.find_all('section',class_="el-container") #Search for the parent div class of the product page
        #Write to the CSV file from the soup refined content
        with open('mobilephone_kilimall.csv','w', encoding='utf-8') as f:
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
            #End Writing
            sleep(randint(3,15)) #To mute process after click to sitmulate Human Interaction 
mobile_phone_killamall()

class KillaMallMobilePhone(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.IntegerField(_("Price"))

    def __str__(self):
        return self.product_name


def jumia_fashion_page():
    url ="https://www.jumia.co.ke/category-fashion-by-jumia/?page="

    for page_number in range(1,50):
        load_web = requests.get(url+str(page_number)+"#catalog-listing", headers=headers)
        # print(load_web)
        soup = BeautifulSoup(load_web.content, 'html.parser')
        fetch_content = soup.find_all('div',class_="-paxs row _no-g _4cl-3cm-shs")
        with open('fashion_jumia.csv','w', encoding='utf-8') as f:
            the_writer = writer(f)
            header=['Image','Link','Product_Name', 'Price']
            the_writer.writerow(header)

       
            for content in fetch_content:
                image=content.find('img', class_='img')
                image.get('data-src')
                link=content.select_one('a[class="core"][href]')['href']
                product_name=content.find('h3', class_='name').text
                price=content.find('div', class_='prc').text

                product_info=[image, link, product_name, price]
                the_writer.writerow(product_info)
        sleep(randint(3,10))
    pass
jumia_fashion_page()

class JumiaFasionModel(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.IntegerField(_("Price"))

    def __str__(self):
        return self.product_name


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

class KillaMallFasionModel(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.IntegerField(_("Price"))

    def __str__(self):
        return self.product_name