from selenium import webdriver
import requests
from bs4 import BeautifulSoup
from time import sleep
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

driver = webdriver.Chrome(executable_path=r'/Users/LuoJieLiang/Desktop/jmplus+/crawler/chromedriver')
driver.get('http://server.jmplus.com.tw/images/hd/lypos/PriceList.html')


min_value = 0
max_value = 200000

min_price = driver.find_element_by_id('RulePriceMin')
max_price = driver.find_element_by_id('RulePriceMax')

min_price.clear()
max_price.clear()
min_price.send_keys(min_value)
max_price.send_keys(max_value)

res = driver.page_source
soup = BeautifulSoup(res, "lxml")

results = soup.find(id = 'Result')
print(results.prettify())
print("-------------------")
	# file = open("source_code/test.html", 'r')
	# content = file.read()
	# print(content)
	# file.close()



	# file = open("source_code/test.html", 'r')

	# list = []

	# for line in file.readlines():
	# 	list.append(line)
	# print(list)
	# file.close()


f = open("prices/source/prices.html","w") 

#opens file with name of "test.txt"
f.write(results.prettify())
	
f.close()
# sleep(5)
