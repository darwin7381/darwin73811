from selenium import webdriver
import requests
from bs4 import BeautifulSoup


import sys
reload(sys)
sys.setdefaultencoding('utf-8')


# start = "2017-01-01"
# due = "2017-01-31"

driver = webdriver.Chrome(executable_path=r'/Users/LuoJieLiang/Desktop/jmplus+/crawler/chromedriver')
driver.get('http://server.jmplus.com.tw/images/hd/mina/check.htm')

startdate = driver.find_element_by_id('txtStartDay')
duedate = driver.find_element_by_id('txtStopDay')
# report = driver.find_element_by_id('DoReport')
entry = driver.find_element_by_id('btQuery')

startdate.clear()
duedate.clear()
startdate.send_keys('2015-01-01')
duedate.send_keys('2015-01-31')
entry.click()

res = driver.page_source
driver.save_screenshot('/Users/LuoJieLiang/Desktop/jmplus+/crawler/chromedriver.png')
soup = BeautifulSoup(res, "lxml")

results = soup.find(id = 'ResultTable')
print(results.prettify())





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





f = open("source_code/check.html","w") #opens file with name of "test.txt"

f.write(results.prettify())
	
f.close()